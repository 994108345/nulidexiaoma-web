import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";

@Component({
  template:'<router-outlet></router-outlet>',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
    order:any = {};
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    this.order = this.tOJsonObj(localStorage.getItem('user'));
    console.log(1);
    console.log("username:"+this.order.userName);
    //页面路由
    //this.commonRouters = commonRouters;
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Login/login",
    };
  }
}
