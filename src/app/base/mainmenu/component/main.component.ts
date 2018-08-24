import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../base/service/common/common.config";
import {MenuItem} from "primeng/primeng";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';


@Component({
  selector:'app-menu',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  menuItems: MenuItem[];
  clickTimes:number;
  user:any={};

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("菜单主页");
    /*获取用户*/
    let userStr = localStorage.getItem("user");
    this.user = this.toJsonObjs(userStr);
    //页面路由
    this.commonRouters = new CommonRouters("subjectmanage");
    this.commonRouters.editRouter = this.commonRouters.rootRouter + "/add";

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Login/login",
      writeUserLoginUrl :BizRoot+ "/UserRange/addUserToList",
      getClickTimes:BizRoot+ "/ClickTimes/getClickTimes",
      getMengList:BizRoot+ "/Menu/getMenuListByUserName",
    };

    this.menuItems = [
      {
        label: '用户管理',
        items: [
          {label: '用户信息',routerLink:'usermanage'},
        ]
      },
      {
        label: '权限管理',
        items: [
          {label: '权限分配'},
          {label: '角色管理',routerLink:'rolemanage'},
          {label: '菜单管理',routerLink:'menumanage'}
        ]
      },
      {
        label: '学习Demo',
        items: [
          {label: 'Redis',
            items: [
              {label: '最近登录的用户',routerLink:'redisstudy'},
            ]
          },
          {label: '多线程',
            items: [
              {label: '线程的速度',routerLink:'multithread'},
            ]
          },
          {label: 'web',
            items: [
              {label: 'html',routerLink:'html'},
              {label: 'javascript',routerLink:'javascript'},
              {label: 'jquery',routerLink:'jquery'},
            ]
          },
          {label: '单点登录',
            items: [
              {label: '单点登录',routerLink:'logintoken'},
            ]
          },
        ]
      },
    ];

    //记录登录信息
    this.wroteUserLoginToRedis();

    //获取点击次数
    this.getClicKTimes();

    /*获取菜单*/
    this.getMenuList();
  }
  redictRouter(router:any){
    let routerStr = 'app/'+router;
    if (router) {
      this.router.navigate([routerStr]);
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }

  //记录登录信息
  wroteUserLoginToRedis(){
    if (this.commonUrls.writeUserLoginUrl) {
      /*从缓存取值*/
      let str = localStorage.getItem('user');
      let user = this.toJsonObject(str);

      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = user;
      this.commonService.doHttpPost(this.commonUrls.writeUserLoginUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
        }else{
          this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }

  //记录登录次数
  getClicKTimes(){
    let condition = null;
    this.commonService.doHttpPost(this.commonUrls.getClickTimes, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        this.clickTimes = rtnData['data'];
      }else{
        this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
      }
    })
  }
  //获取菜单列
  getMenuList(){
    let condition = {userName:this.user['userName']};
    this.commonService.doHttpPost(this.commonUrls.getMengList, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        let menuItem = rtnData['data'];
        /*this.menuItems = menuItem;*/
      }else{
        this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
      }
    })
  }
}
