/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./login.component";
import {MainComponent} from "./component/main.component";
import {loginPath} from "./login.component.config";

const routes: Routes = [
  {
    path: loginPath,
    component: LoginComponent,
    children: [
      { path: '', component: MainComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
