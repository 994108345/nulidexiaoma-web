/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login.component";
import {MainComponent} from "./component/main.component";
import {loginPath} from "./login.component.config";
import {NgModule} from "@angular/core";

const loginRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: loginPath,
    component: LoginComponent,
    children: [
      { path: '', component: MainComponent },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
