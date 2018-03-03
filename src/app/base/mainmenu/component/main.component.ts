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

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    //页面路由
    this.commonRouters = new CommonRouters("subjectmanage");
    this.commonRouters.editRouter = this.commonRouters.rootRouter + "/add";

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Login/login",
      writeUserLoginUrl :BizRoot+ "/UserRange/addUserToList",
    };

    this.menuItems = [
      {
        label: '用户管理',
        icon: 'fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: '用户信息',routerLink:'usermanage'},
          {label: 'Quit'}
        ]
      },
      {
        label: '权限管理',
        icon: 'fa-edit',
        items: [
          {label: '权限分配', icon: 'fa-mail-forward'},
          {label: '角色管理', icon: 'fa-mail-forward',routerLink:'rolemanage'},
          {label: '菜单管理', icon: 'fa-mail-reply',routerLink:'menumanage'}
        ]
      },
      {
        label: '编辑器',
        icon: 'fa-edit',
        items: [
          {label: '添加学习资料', icon: 'fa-mail-forward'},
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      },
      {
        label: '学习Demo',
        icon: 'fa-edit',
        items: [
          {label: 'Redis',
            icon: 'fa-mail-forward',
            items: [
              {label: '最近登录的用户', icon: 'fa-mail-forward',routerLink:'redisstudy'},
            ]
          },
          {label: 'Redo', icon: 'fa-mail-reply'}
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]}
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              {label: 'Save', icon: 'fa-save'},
              {label: 'Update', icon: 'fa-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              {label: 'Delete', icon: 'fa-minus'}
            ]
          }
        ]
      }
    ];

    //记录登录信息
    this.wroteUserLoginToRedis();
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
      let user = this.tOJsonObj(str);

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
}
