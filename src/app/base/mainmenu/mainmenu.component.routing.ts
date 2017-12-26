/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainMenuComponent} from "./mainmenu.component";
import {mainMenuPath} from "./mainmenu.component.config";
import {MainComponent} from "./component/main.component";
import {IndexComponent} from "./component/index/index.component";
import {PageNotFoundComponent} from "../login/component/pagenotfound/pagenotfound.component";

const routes: Routes = [
  {
    path: mainMenuPath,
    component: MainMenuComponent,
    children: [
      { path: '', component: MainComponent },
      { path:'index',component:IndexComponent,outlet:'pop',},
    ]
  },
];

export const routings = RouterModule.forChild(routes);
