import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AbstractComponent} from "../../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../../base/service/common/common.config";
import {TreeNode} from "primeng/primeng";
import {ArrObj, Data, files, menuTreeCols_ext} from "./add.component.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';


@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent extends AbstractComponent implements OnInit{
  /*菜单tree*/
  menuTable: TreeNode[] = [];
  /*菜单tree的列名*/
  menuTreeCols:any[] ;
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
    this.menuTreeCols = menuTreeCols_ext;
    /*this.menuTable = files.data;*/
    /*t跳转菜单页面*/
    this.commonRouters = new CommonRouters("mainMenu");
    this.commonRouters.mainMenuRouter = this.commonRouters.rootRouter;

   //跳转链接
    this.commonUrls = {
      queryUrl :BizRoot+ "/Menu/getMenuPageBean",
      getMenuTree:BizRoot+ "/Menu/getMenuTree",//获取树形菜单
    };
    /*获取并递归菜单*/
    this.getMenuTree();
  }
  /*新增菜单*/
  addNewMenu(){}
  /*获取菜单树形目录*/
  getMenuTree(){
    if (this.commonUrls.getMenuTree) {
      console.log("递归菜单");
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      let condition = [];
      this.commonService.doHttpPost(this.commonUrls.getMenuTree, condition).then(rtnData => {
        this.status = JSON.parse(rtnData['status']);
        if(this.status && this.status==10000){
          /*数据*/
          let menuTreeData = rtnData['data'];
          /*开始遍历菜单*/
          this.groupMenu(menuTreeData,"0",menuTreeData.length);
        }else{
          this.msgs = this.wzlAlert.error("查找树形菜单失败，"+rtnData['message']);
        }
      })
    } else {
      this.msgs = this.wzlAlert.info("树形菜单url不存在，请联系管理员！")
    }
  }
  /*组合菜单*/
  groupMenu( orders:any[],mId:string,n:number){
    let arrObj:any = {};
    /*n来控制递归*/
    if(n != 0){
      for (let i = 0; i < orders.length; i++) {
        let arr:any = {};
        let data: Data = orders[i];
        let parentId = data["parentId"];
        let menuId = data["menuId"];
        if (parentId + "" == mId) {
          arrObj.data = data;//给数组赋值
          orders.splice(i, 1,{});//删除已经插入的记录
          /*如果数组长度为0.则说明已经全部递归*/
          arr = this.groupMenu(orders, menuId, n - 1);//递归
          if(arr.data){
            arrObj.children = [];
            arrObj.children.push(arr);
          }
          /*如果是根目录*/
          if (mId == "0") {
            this.menuTable.push(arrObj);
          }
        }
      }
  }
    return arrObj;
  }

}
