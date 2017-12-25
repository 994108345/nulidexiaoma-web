/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainMenuComponent} from "./mainmenu.component";
import {mainMenuPath} from "./mainmenu.component.config";
import {MainComponent} from "./component/main.component";
import {UserManageComponent} from "../../nulidexiaoma/usermanage/usermanage.component";
import {UserManageModule} from "../../nulidexiaoma/usermanage/usermanage.module";
import {IndexComponent} from "./component/index/index.component";

const routes: Routes = [
  {
    path: mainMenuPath,
    component: MainMenuComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'userManage',component:UserManageModule},
      { path:'index',component:IndexComponent},
    ]
  },
];

export const routing = RouterModule.forChild(routes);
