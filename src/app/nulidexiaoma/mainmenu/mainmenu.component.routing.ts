/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainMenuComponent} from "./mainmenu.component";
import {mainMenuPath} from "./mainmenu.component.config";

const routes: Routes = [
  {
    path: mainMenuPath,
    component: MainMenuComponent,
    children: [
      { path: '', component: MainMenuComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
