/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainComponent} from "./component/main.component";
import {RoleManageComponent} from "./rolemanage.component";
import {EditComponent} from "./component/edit/edit.component";
import {AddComponent} from "./component/add/add.component";

const roleRoutes: Routes = [

  {
    path: '',
    component: RoleManageComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
    ]
  }

];

export const routing = RouterModule.forChild(roleRoutes);
