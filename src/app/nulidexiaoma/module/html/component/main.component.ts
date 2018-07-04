import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {error} from "util";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  mqStr:string;//推送mq的内容

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("html页面");
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      /*推送mq*/
      sendMqUrl: BizRoot + "/MqTest/sendMq",
    };
  }
  /*推送mq*/
  sendMq(){
    if (this.commonUrls.sendMqUrl) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      try{
        this.commonService.doHttpPost(this.commonUrls.sendMqUrl,this.mqStr).then(rtnData => {
          this.status = JSON.parse(rtnData['status']);
          if(this.status && this.status==10000){
            this.msgs = this.wzlAlert.success(rtnData['message']);
          }else{
            this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
          }
        })}catch(error){
        this.msgs = this.wzlAlert.error("发生异常，请联系管理员"+error);
      }

    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
