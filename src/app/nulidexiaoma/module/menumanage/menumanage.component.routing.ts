/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainComponent} from "./component/main.component";
import {MenuManageComponent} from "./menumanage.component";
import {AddComponent} from "./component/add/add.component";

const menuRoutes: Routes = [

  {
    path: '',
    component: MenuManageComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'add', component: AddComponent },
    ]
  }

];

export const routing = RouterModule.forChild(menuRoutes);
