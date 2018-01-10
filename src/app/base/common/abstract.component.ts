import {BaseComponent} from "./base.component";
import {Injector} from "@angular/core";
import {DataTable, LazyLoadEvent, Message} from "primeng/primeng";
import {CommonService} from "../service/common/common.service";
import {WzlAlertService} from "../service/wzlalert/wzlalert.service";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {Router} from "@angular/router";
import {AppGuardService} from "../guard/app.gurad.service";
/**
 * Created by wenzailong on 2017/12/21.
 */
export class AbstractComponent {
  order:any = {};//一个记录
  orders:any[] = [];//一个记录列表
  commonRouters: any;//页面路由管理
  commonUrls: any;//页面内基本操作的url
  status:any;//后台返回信息的状态
  msgs:any;//提示框
  totalRecords:number ;//总共记录数
  searchParams: any = {};//查询条件
  table: any;//查询表格

  constructor(public injector: Injector) {
  }
  /*懒加载方法*/
  loadData(event: LazyLoadEvent) {
    if (this.commonUrls.queryUrl) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = this.getQueryCondition(event,this.searchParams);
      this.commonService.doHttpPost(this.commonUrls.queryUrl, condition).then(rtnData => {
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

  /*获取当前页*/
  getQueryCondition(event: LazyLoadEvent,searchParams:any){
    let rows = event["rows"];
    let page = Math.floor(event["first"] / rows) + 1;
    console.log(page);
    let condition = {
      "curPage":page,
      "pageSize":rows
    }
    return condition;
  }
  /*刷新当前页*/
  refresh(){
    if(this.table){
      this.table.reset();
    }
  }

  /*将对象转化成json字符串对象*/
  toJsonStr(obj:any){
    let jsonStr = JSON.stringify(obj);
    return jsonStr;
  }

  /*将json字符串转成json对象
  * 注意！转化成是一个json对象数组
  * */
  tOJsonObjs(json:any){
    let jsonObj = JSON.parse(json);
    return jsonObj;
  }

  /*将json字符串转成json对象
   * 注意！转化成是一个json对象数组,这里取第一个
   * */
  tOJsonObj(json:any){
    let jsonObj = JSON.parse(json);
    return jsonObj[0];
  }
  //超时执行
  /*
  setTimeout(() => {
   this.blockedDocument = false;
   }, 3000);
   */


  /** ----------从DI构造器中手动获取服务-----------*/
  get commonService(): CommonService {
    return this.injector.get(CommonService);
  }
  /*提示信息服务*/
  get wzlAlert(): WzlAlertService {
    return this.injector.get(WzlAlertService);
  }
  /*路由服务*/
  get router(): Router {
    return this.injector.get(Router);
  }
  /*路由守卫服务*/
  get appGuard(): AppGuardService {
    return this.injector.get(AppGuardService);
  }
}
