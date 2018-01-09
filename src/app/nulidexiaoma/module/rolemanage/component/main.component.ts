import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {roleCols_config} from "./main.component.config";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  /*列名*/
  roleCols:any[] ;
  /*表数据*/
  roleDate:any[];

  @ViewChild('table') table: any;
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    /*从缓存取值*/
    let str = localStorage.getItem('user');
    this.order = this.tOJsonObj(str);
    //页面路由
    //this.commonRouters = commonRouters;
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Role/getRolePageBean",
    };
    /*列名*/
    this.roleCols = roleCols_config;
  }
}
