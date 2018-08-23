import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {TreeNode} from "primeng/primeng";
import {roleParam} from "../add/add.component.config";


@Component({
  templateUrl: './edit.component.html',
})
export class EditComponent extends AbstractComponent implements OnInit{
  isUpdate:any = true;
  menuTable: TreeNode[] = [];

  isMenu:boolean = false;
  isSave:boolean = false;
  isSaveBtn:boolean = true;

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("编辑角色");
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("menumanage");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      beginEditRoleUrl:BizRoot+"/Role/beginEditRole",//编辑前获取树形菜单

    };
    this.order = this.wzlCache.getCache("data");
    this.getMenuTree();

  }

  getMenuTree(){
    let condition = this.order;
    this.commonService.doHttpPost(this.commonUrls.beginEditRoleUrl, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        /*数据*/
        this.menuTable = rtnData['data'];
      }else{
        this.msgs = this.wzlAlert.error("查找树形菜单失败，"+rtnData['message']);
      }
    })
  }

  menuSelect(event){
    if(!this.selectOrder || this.selectOrder.length<1){
      this.msgsDialog = this.wzlAlert.error("菜单不能为空");
      this.isMenu = true;
    }else{
      this.isMenu = false;
    }
    this.btnState();
  }

  btnState(){
    if(!(this.isSave || this.isMenu)){
      this.isSaveBtn = false;
    }else{
      this.isSaveBtn = true;
    }
  }

  /*输入框验证*/
  inputValidations(param:any,num?:string){
    this.isSave = super.inputValidation(param,roleParam,num);
    this.btnState();
  }


  saveRole(){
    let param ={role:this.order,menuList:this.selectOrder};
    let condition = param.toString;
    console.log(this.menuTable);
    this.commonService.doHttpPost(this.commonUrls.beginEditRoleUrl, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        this.router.navigate([this.commonRouters.mainMenuRouter]);
      }else{
        this.msgs = this.wzlAlert.error(rtnData['message']);
      }
    })
  }

}
