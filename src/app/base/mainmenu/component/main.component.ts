import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../base/service/common/common.config";
import {MenuItem} from "primeng/primeng";

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
  redictRouter(router:any){
    let routerStr = 'app/'+router;
    if (router) {
      this.router.navigate([routerStr]);
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
