import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../common/abstract.component";
import {BizRoot, CommonRouters} from "../../service/common/common.config";

@Component({
  selector:'app-login',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    //页面路由
    //this.commonRouters = commonRouters;
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("app");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter+'/mainMenu';

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Login/login",
    };
  }
  /*登录*/
  login(){
    if (this.commonUrls.loginUrl) {
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.loginUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("登录成功");
          /*缓存数据*/
          let str = this.toJsonStr(rtnData['data']);
          localStorage.setItem('user',str);
          this.router.navigate(["/app/index"]);
        }else{
          this.msgs = this.wzlAlert.error("登录失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
