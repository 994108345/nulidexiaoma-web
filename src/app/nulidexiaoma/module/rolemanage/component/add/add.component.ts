import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";
import {TreeNode} from "primeng/primeng";
import {menuTableDemoExt, roleParam} from "./add.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {MessageInfo} from "../../../../../base/service/wzlalert/wzlalert.config";
import {menuTreeCols_ext} from "../../../menumanage/component/add/add.component.config";


@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends AbstractComponent implements OnInit{
  /*菜单tree*/
  menuTable: TreeNode[] = [];
  menuTableDemo:TreeNode[] = [];//测试用的
  /*菜单tree的列名*/
  menuTreeCols:any[] ;

  /*添加按钮控制*/
  isAdd:boolean = true;
  isAddBtn:boolean = true;
  isMenu:boolean = true;

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("角色新增")
    this.menuTreeCols = menuTreeCols_ext;
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("rolemanage");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
      addRoleUrl:BizRoot+ "/Role/addRole",//获取树形菜单
      getMenuTree:BizRoot+ "/Menu/getMenuTree",//获取树形菜单
    };
    /*获取并递归菜单*/
    this.getMenuTree();

    this.menuTableDemo = menuTableDemoExt;
  /*this.requireInstance();*/
  }

  /*添加菜单*/
  addRole(){
      let condition = {role:this.order,menu:this.selectOrder};
      this.commonService.doHttpPost(this.commonUrls.addRoleUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.error("添加角色成功！");
          this.router.navigate([this.commonRouters.mainMenuRouter]);
        }else{
          this.msgs = this.wzlAlert.error("添加菜单失败，"+rtnData['message']);
        }
      })
  }

  getMenuTree(){
    let condition = [];
    this.commonService.doHttpPost(this.commonUrls.getMenuTree, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        /*数据*/
        this.menuTable = rtnData['data'];
      }else{
        this.msgs = this.wzlAlert.error("查找树形菜单失败，"+rtnData['message']);
      }
    })
  }

  /*输入框验证*/
  inputValidations(param:any,num?:string){
    this.isAdd = super.inputValidation(param,roleParam,num);
    this.btnState();
  }

  menuSelect(event){
    console.log(this.selectOrder);
    if(!this.selectOrder || this.selectOrder.length<1){
      this.msgsDialog = this.wzlAlert.error("菜单不能为空");
      this.isMenu = true;
    }else{
      this.isMenu = false;
    }
    this.btnState();
  }

  btnState(){
    if(!(this.isAdd || this.isMenu)){
      this.isAddBtn = false;
    }else{
      this.isAddBtn = true;
    }
  }
}
