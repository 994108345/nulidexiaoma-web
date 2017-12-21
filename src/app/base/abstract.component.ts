import {BaseComponent} from "./base.component";
import {Injector} from "@angular/core";
/**
 * Created by wenzailong on 2017/12/21.
 */
export class AbstractComponent {
  order:any[] = [];//一个记录
  orders:any[] = [];//一个记录列表
  constructor(public injector: Injector) {
  }

}
