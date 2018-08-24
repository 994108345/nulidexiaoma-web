import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {loginTokenPath} from "../logintoken.component.config";
import {escape, unescape} from "querystring";

@Component({
  template:'<router-outlet></router-outlet>',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("单点登录");
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters(loginTokenPath);
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Token/login",
      logOutUrl :BizRoot+ "/Token/logOut",
    };
    let loginToken = this.getCookie("loginToken");
    if(loginToken){
      this.order.loginToken = loginToken;
      this.login();
    }

  }
  login(){
    let condition = this.order;
    this.commonService.doHttpPost(this.commonUrls.loginUrl, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        let data = rtnData['data']
        this.setCookie("loginToken",data.loginToken);
        this.msgs = this.wzlAlert.success(rtnData['message']);
      }else{
        this.msgs = this.wzlAlert.error(rtnData['message']);
      }
    })
  }
  logOut(){
    let condition = this.order;
    this.commonService.doHttpPost(this.commonUrls.logOutUrl, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        this.removeCookie("loginToken");
        this.msgs = this.wzlAlert.success(rtnData['message']);
      }else{
        this.msgs = this.wzlAlert.error(rtnData['message']);
      }
    })
  }

  /*delCookie(name){
    let myDate = new Date();
    myDate.setTime(-1000);//设置时间
    document.cookie=name+"=''; expires="+myDate.toDateString();
  }

  addCookie(loginToken){
    document.cookie = "loginToken='"+loginToken+"'";
  }

  cookieToOject():{}{
    let cookieArr = document.cookie.split(";");
    let obj = {}
    cookieArr.forEach((i) => {
      let arr = i.split("=");
      obj[arr[0]] =arr[1];
    });
    return obj
  }*/

  getCookie(c_name) {
    if (document.cookie.length > 0) {
      let c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        let c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1)
          c_end = document.cookie.length;
        return document.cookie.substring(c_start, c_end);
      }
    }
    return "";
  }

  setCookie(c_name:string, value:string, expireTimes?:number) {
    let exdate = new Date();
    //exdate.setDate(exdate.getDate()+expiredays);
    exdate.setTime(exdate.getTime() + expireTimes);
    document.cookie = c_name
      + "="
      + value
      + ((expireTimes == null) ? "" : ";expires="
        + exdate.toDateString());
  }

  removeCookie(c_name) {
    this.setCookie(c_name, "", -1);
  }

}
