/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainComponent} from "./component/main.component";
import {userManagePath} from "./usermanage.component.config";
import {UserManageComponent} from "./usermanage.component";

const routes: Routes = [

  {
    path: 'mainMenu/'+userManagePath,
    component: UserManageComponent,
    children: [
      { path: '', component: MainComponent },
    ]
  }

];

export const routing = RouterModule.forChild(routes);
