import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {cols} from "./main.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  redisCols:any[] = cols;//列名
  redisData: any[];
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      getTop10Url: BizRoot + "/UserRange/getTop10",
    };
    //获得最近登录的用户信息
  this.getTop10();
  }
  getTop10(){
    if (this.commonUrls.getTop10Url) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = null;
      this.commonService.doHttpPost(this.commonUrls.getTop10Url, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.redisData =  rtnData.data;
        }else{
          this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
