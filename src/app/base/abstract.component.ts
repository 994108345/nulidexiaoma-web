import {BaseComponent} from "./base.component";
import {Injector} from "@angular/core";
import {Message} from "primeng/primeng";
import {CommonService} from "./common.service";
import {WzlAlertService} from "./wzlalert.service";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
/**
 * Created by wenzailong on 2017/12/21.
 */
export class AbstractComponent {
  order:any = {};//一个记录
  orders:any = {};//一个记录列表
  commonRouters: any;//页面路由管理
  commonUrls: any;//页面内基本操作的url
  status:any;//后台返回信息的状态
  msgs:any;//提示框

  constructor(public injector: Injector) {
  }

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
}
