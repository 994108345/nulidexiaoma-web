import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  normalTime:any;
  threadTime:any;
  threadNum:number = 0;


  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("多线程断点");
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      normalMethod: BizRoot + "/MultiThread/normalMethod",
      threadMethod : BizRoot + "/MultiThread/multiThreadMethod",
    };
  }

  //普通方法
  normalMethod(){
    if (this.commonUrls.normalMethod) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = null;
      this.commonService.doHttpPost(this.commonUrls.normalMethod, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.normalTime =  rtnData.data;
        }else{
          this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
  //线程方法
  threadMethod(){
    if (this.commonUrls.threadMethod) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      this.commonService.doHttpPost(this.commonUrls.threadMethod, this.threadNum).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.threadTime =  rtnData.data;
        }else{
          this.msgs = this.wzlAlert.error("请求信息失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
