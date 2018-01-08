/**
 * Created by wenzailong on 2017/12/20.
 */
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './base/login/component/pagenotfound/pagenotfound.component';
import {NgModule} from "@angular/core";
import {AppGuardService} from "./base/guard/app.gurad.service";


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: 'app/base/login/login.module#LoginModule'
  },
  {
    path: 'app',
    canActivate: [AppGuardService],
    loadChildren: 'app/base/mainmenu/mainmenu.module#MainMenuModule'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];
/*export const routing = RouterModule.forRoot(routes, { useHash: false });*/



@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
