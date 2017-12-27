import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../base/service/common/common.config";
@Component({
  template: '<router-outlet></router-outlet>'
})
export class IndexComponent extends AbstractComponent implements OnInit{
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    //页面路由
    //this.commonRouters = commonRouters;
    this.commonRouters = new CommonRouters("subjectmanage");
    this.commonRouters.editRouter = this.commonRouters.rootRouter + "/add";

   //跳转链接
    this.commonUrls = {
      loginUrl :BizRoot+ "/Login/login",
    };
  }
  /*登录*/
  login(){
    if (this.commonUrls.loginUrl) {
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.loginUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("登录成功");
        }else{
          this.msgs = this.wzlAlert.error("登录失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("请求url不存在，请联系管理员！")
    }
  }
}
