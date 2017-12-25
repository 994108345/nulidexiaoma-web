import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BaseRoot, BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {MenuItem} from "primeng/primeng";

@Component({
  selector:'left-main',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent extends AbstractComponent implements OnInit{
  menuItems: MenuItem[];
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    //页面路由
    //this.commonRouters = commonRouters;
    this.commonRouters = new CommonRouters("userManage");
    this.commonRouters.editRouter = this.commonRouters.rootRouter + "/index";

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Login/login",
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
          {label: '用户信息',command: (event) => {this.login();}},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          {label: 'Undo', icon: 'fa-mail-forward'},
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

  }
  /*登录*/
  login(){
    if (this.commonUrls.loginUrl) {
      this.router.navigate(["userManage"]);
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
