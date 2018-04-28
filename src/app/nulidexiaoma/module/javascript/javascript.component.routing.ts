/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainComponent} from "./component/main.component";
import {JavascriptComponent} from "./javascript.component";

const routes: Routes = [

  {
    path: '',
    component: JavascriptComponent,
    children: [
      { path: '', component: MainComponent },
    ]
  }

];

export const routing = RouterModule.forChild(routes);
