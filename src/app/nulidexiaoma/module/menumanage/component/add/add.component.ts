import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends AbstractComponent implements OnInit{
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
    };
  }

}
