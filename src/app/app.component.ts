import {Component, OnInit} from '@angular/core';
import {CommonRouters} from "./base/common.config";
import {BaseComponent} from "./base/base.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit{
  commonRouters: any;//页面路由管理
  ngOnInit() {
    this.commonRouters = new CommonRouters("app");
    this.commonRouters.loginRouter = this.commonRouters.rootRouter + "/login";
    /*this.routerLogin();*/
  }
  routerLogin(){
    this.router.navigate([this.commonRouters.loginRouter]);
  }
}
