import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";
import {TreeNode} from "primeng/primeng";
import {ArrObj, Data, files, menuParam, menuTreeCols_ext} from "./add.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {MessageInfo} from "../../../../../base/service/wzlalert/wzlalert.config";


@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends AbstractComponent implements OnInit{
  /*添加按钮控制*/
  isAdd:boolean = true;
  isAddBtn:boolean = true;
  isExistMenuId:boolean = true;
  msgsOfDialog:any;//弹出窗的错误信息

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("菜单管理的新增");
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("menumanage");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
      getMenuTree:BizRoot+ "/Menu/getMenuTree",//获取树形菜单
      addMenuUrl:BizRoot+ "/Menu/addMenu",//获取树形菜单
      isMenuIdIsExistUrl:BizRoot+ "/Menu/isMenuIdIsExist",//查询menuId是否重复
    };
  let menu = this.wzlCache.getCache("menu");
  this.order.parentName = menu.menuName;
  this.order.parentId = menu.menuId;

  }

  /*添加菜单*/
  addMenu(){
    if (this.commonUrls.addMenuUrl) {
      console.log("递归菜单");
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.addMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.error("添加菜单成功！");
          this.router.navigate([this.commonRouters.mainMenuRouter]);
        }else{
          this.msgs = this.wzlAlert.error("添加菜单失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("添加菜单url不存在，请联系管理员！")
    }
  }
  /*输入框验证*/
  inputValidations(param:any,num?:string){
    this.isAddBtn = super.inputValidation(param,menuParam,num);
  }

  isMenuIdExist(menuId){
    if(menuId){
      let condition = {menuId:menuId};
      this.commonService.doHttpPost(this.commonUrls.isMenuIdIsExistUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.isExistMenuId = false;
        }else{
          this.isExistMenuId = true;
          this.msgsOfDialog = this.wzlAlert.warn(rtnData['message']);
          this.order.menuId = "";
          this.inputValidations('menuId','1');
        }
        this.btnState();
      })

    }
  }
  /*按钮状态*/
  btnState(){
    if(this.isAddBtn || this.isExistMenuId){
      this.isAdd = true;
    }else{
      this.isAdd = false;
    }
  }

}
