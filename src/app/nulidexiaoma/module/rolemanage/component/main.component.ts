import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {roleCols_config} from "./main.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';

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
  /*跳转到编辑页面*/
  routerEdit(){
    if (this.commonUrls.getOneMenuUrl) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = this.selectOrder;
      this.commonService.doHttpPost(this.commonUrls.getOneMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("查找成功");
          this.wzlCache.setCache("data",rtnData['data'][0]);
          this.router.navigate([this.commonRouters.editRouter]);
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

  //删除提要记录
  deleteOneMenu(){
    if (this.commonUrls.deleteMenuUrl) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = this.selectOrder;
      console.log(11111);
      this.commonService.doHttpPost(this.commonUrls.deleteMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("删除菜单成功");
          this.refresh();
        }else{
          this.msgs = this.wzlAlert.error("删除菜单失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }

  /*确定删除吗*/
  sureDelete(){
    this.confirmationService.confirm({
      message: '确定删除吗?',
      accept: () => {
        this.deleteOneMenu();
      }
    });
  }
}
