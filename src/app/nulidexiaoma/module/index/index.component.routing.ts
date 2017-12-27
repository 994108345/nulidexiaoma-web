/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {indexPath} from "./index.component.config";
import {MainComponent} from "./component/main.component";
import {IndexComponent} from "./index.component";

const route: Routes = [

  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: MainComponent },
    ]
  }

];

export const routing = RouterModule.forChild(route);
