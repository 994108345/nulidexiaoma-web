import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {menuCols_config} from "./main.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {ConfirmationService, TreeNode} from "primeng/primeng";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  /*菜单tree*/
  menuTable: TreeNode[] = [];
  user:any;

  @ViewChild('table') table: any;
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    console.log("菜单管理主页面");
    /*从缓存取值*/
    let str = localStorage.getItem('user');
    this.user = this.toJsonObjs(str);
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("menumanage");
    this.commonRouters.addRouter = this.commonRouters.rootRouter + "/add";
    this.commonRouters.editRouter = this.commonRouters.rootRouter + "/edit";

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
      getOneMenuUrl :BizRoot+ "/Menu/getMenuList",
      deleteMenuUrl :BizRoot+ "/Menu/deleteMenu",
      getMenuTree:BizRoot+ "/Menu/getMenuTree",//获取树形菜单
    };
    this.getMenuTree();
  }
  /*获取菜单树形目录*/
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

  /*跳转到编辑页面*/
  routerEdit(){
    if(this.order.menuId) {
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.getOneMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if (this.status && this.status == 10000) {
          this.msgs = this.wzlAlert.success("查找成功");
          this.wzlCache.setCache("data", rtnData['data'][0]);
          this.router.navigate([this.commonRouters.editRouter]);
        } else {
          this.msgs = this.wzlAlert.error("查找失败，" + rtnData['message']);
        }
      })
    }
  }

  /*跳转到新增页面*/
  routerAdd(){
      if(this.order.menuId){
        this.wzlCache.setCache("menu",this.order);
        this.router.navigate([this.commonRouters.addRouter]);
      }else{
        this.msgs = this.wzlAlert.warn("请选择父菜单");
      }
  }

  //删除提要记录
  deleteOneMenu(){
    if(this.order.menuId){
      let condition = this.order;
      this.commonService.doHttpPost(this.commonUrls.deleteMenuUrl, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          this.msgs = this.wzlAlert.success("删除菜单成功");
          this.refreshView();
        }else{
          this.msgs = this.wzlAlert.error("删除菜单失败，"+rtnData['message']);
        }
      })
    }else{
      this.msgs = this.wzlAlert.error("请选择要删除的菜单");
    }

  }

  /*确定删除吗*/
  sureDelete(){
    this.confirmationService.confirm({
      message: '确定删除吗?',
      accept: () => {
        this.deleteOneMenu();
      }
    });
  }

  /*记录被选择时调用的方法*/
  onRowSelect(event:any){
    let node = event.node;
    /*获取菜单信息*/
    this.getOneMenuByMenuId(node.data);
  }

  getOneMenuByMenuId(menuId:string){
    let condition = {menuId:menuId};
    this.commonService.doHttpPost(this.commonUrls.getOneMenuUrl, condition).then(rtnData => {
      this.status = JSON.parse(rtnData['status']);
      if(this.status && this.status==10000){
        this.msgs = this.wzlAlert.success("查找成功");
        this.order = rtnData['data'][0];
      }else{
        this.msgs = this.wzlAlert.error("查找失败，"+rtnData['message']);
      }
    })
  }

  onRowUnSelect(){
    this.order = "";
  }


  refreshView(){
    this.getMenuTree();
  }

}
