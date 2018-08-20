import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {menuParam} from "./edit.component.config";


@Component({
  templateUrl: './edit.component.html',
})
export class EditComponent extends AbstractComponent implements OnInit{
  isUpdate:any = true;

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("menumanage");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      updateMenuUrl:BizRoot+ "/Menu/updateMenu",//获取树形菜单
    };
    this.order = this.wzlCache.getCache("data");
  }
  /*添加菜单*/
  addMenu(){
    if (this.commonUrls.updateMenuUrl) {
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.updateMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("更新菜单成功！");
        }else{
          this.msgs = this.wzlAlert.error("更新菜单失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("更新菜单url不存在，请联系管理员！")
    }
  }
  /*输入框验证*/
  inputValidations(param:any,num?:string){
    this.isUpdate = super.inputValidation(param,menuParam,num);
  }

}
