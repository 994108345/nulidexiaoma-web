import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {menuCols_config} from "./main.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  /*列名*/
  menuCols:any[] ;
  /*表数据*/
  menuDate:any[];

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
    this.commonRouters = new CommonRouters("menumanage");
    this.commonRouters.addRouter = this.commonRouters.rootRouter + "/add";

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
      getOneMenuUrl :BizRoot+ "/Menu/getMenuList",
    };
    /*列名*/
    this.menuCols = menuCols_config;
  }
  /*跳转到编辑页面*/
  routerEdit(){
    if (this.commonUrls.getOneMenuUrl) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.getOneMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("查找成功");
          /*数据*/
          this.orders = rtnData['data'];
          /*总记录数*/
          this.totalRecords = rtnData['totalRecords'];
        }else{
          this.msgs = this.wzlAlert.error("查找失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }

  /*跳转到新增页面*/
  routerAdd(){
    if(this.commonRouters.addRouter){
      this.router.navigate([this.commonRouters.addRouter]);
    }
  }
}
