import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router,
  RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AbstractComponent} from "../common/abstract.component";
import {Injectable, OnInit} from "@angular/core";
/**
 * Created by wenzailong on 2017/12/29.
 */

@Injectable()
export class AppGuardService implements  CanActivate,CanActivateChild{
  constructor( private router: Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    let str = localStorage.getItem('user');
    console.log("守卫了吗");
    if(str){
      return true;
    }else{
      this.router.navigate(["login"]);
      return false;
    }
  }
}

