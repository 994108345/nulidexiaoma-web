import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {escape} from "querystring";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  inputValue:string = "";
  windowHigAndWid:string = "";
  screenHigAndWid:string = "";
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("html");
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      normalMethod: BizRoot + "/MultiThread/normalMethod",
      threadMethod : BizRoot + "/MultiThread/multiThreadMethod",
    };
  }

  /*插入html*/
  button1(){
    document.write("<p>给页面插入一段html</p>");
  }

  /*修改文本*/
  button2(){
    var x = document.getElementById("p1");
    /*x.innerHTML = "我改成你看咋滴！";*/
    x.innerText = "我改成你看咋滴！";
  }

  /*点击修改图片*/
  imgChange(){
    let img = document.getElementById("changeImg");
    let imgPath = img.getAttribute("src");
    if(imgPath.match("bobo2")){
      img.setAttribute("src","../../../../../assets/picture/bobo1.jpg");
    }else{
      img.setAttribute("src","../../../../../assets/picture/bobo2.jpg");
    }
  }

  /*检验值类型*/
  checkInputVal(){
    if(!this.inputValue.match("^[0-9]*$")){
      alert("只能输入数字");
    }
  }
  /*改变css样式*/
  colorChange(){
    var color = document.getElementById("colorP");
    color.style.color="green";
    color.style.fontWeight="800";
    alert("嘻嘻，看开你自己！");
  }
  colorNoChange(){
    var color = document.getElementById("colorP");
    color.style.color="black";
    color.style.fontWeight="blod";
    alert("真乖，放过你了");
  }
  //看开浏览器窗口的内部高度
  sortWindowHigWid(){
    var hig = window.innerHeight;
    var wid = window.innerWidth;
    this.windowHigAndWid = "浏览器窗口高度为:"+hig+",宽度为:"+wid;
    window.open("http://localhost:4199/#/app/html");
  }

  sortScreenHigWid(){
    var hig = screen.availHeight;
    var wid = screen.availWidth;
    this.screenHigAndWid = "屏幕窗口高度为:"+hig+",宽度为:"+wid;
  }
  //创建cookie
  createCookie(){
    let cookie = document.cookie;

    if(cookie.length > 0){
      let user = this.tOJsonObjs(cookie);
      alert("用户姓名：" + user.name);
    }else{
      let user = this.wzlCache.getCache("user");
      let c_name = user[0].name;
      let cookie = {name:""};
      cookie.name = c_name;
      let jsonObj = this.toJsonStr(cookie);

      document.cookie=jsonObj;
    }
  }
  //清空cookie
  clearCookie(){
    document.cookie ="";
  }
}
