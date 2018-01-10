import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";
import {TreeNode} from "primeng/primeng";
import {files, menuTreeCols_ext} from "./add.component.config";

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends AbstractComponent implements OnInit{
  /*菜单tree*/
  menuTable: TreeNode[];
  /*菜单tree的列名*/
  menuTreeCols:any[] ;
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    this.menuTreeCols = menuTreeCols_ext;
    this.menuTable = files;
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
    };
  }
  /*新增菜单*/
  addNewMenu(){}
  /*获取菜单树形目录*/
  getMenuTree(){

  }

}
