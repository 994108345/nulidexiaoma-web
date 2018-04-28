import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      normalMethod: BizRoot + "/MultiThread/normalMethod",
      threadMethod : BizRoot + "/MultiThread/multiThreadMethod",
    };
  }
}
