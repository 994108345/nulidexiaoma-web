/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainComponent} from "./component/main.component";
import {RoleManageComponent} from "./rolemanage.component";

const roleRoutes: Routes = [

  {
    path: '',
    component: RoleManageComponent,
    children: [
      { path: '', component: MainComponent },
    ]
  }

];

export const routing = RouterModule.forChild(roleRoutes);
