/**
 * Created by tomfang on 2017-08-18.
 */
import { RouterModule, Routes } from "@angular/router";
import {MainMenuComponent} from "./mainmenu.component";
import {MainComponent} from "./component/main.component";

const mainMenuRouters: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path:'index', loadChildren: 'app/nulidexiaoma/module/index/index.module#IndexModule' },
      { path:'usermanage', loadChildren: 'app/nulidexiaoma/module/usermanage/usermanage.module#UserManageModule' },
      { path:'rolemanage', loadChildren: 'app/nulidexiaoma/module/rolemanage/rolemanage.module#RoleManageModule' },
      { path:'menumanage', loadChildren: 'app/nulidexiaoma/module/menumanage/menumanage.module#MenuManageModule' },
      { path:'redisstudy', loadChildren: 'app/nulidexiaoma/module/redisstudy/redisstudy.module#RedisStudyModule' },
      { path:'multithread', loadChildren: 'app/nulidexiaoma/module/multithread/multithread.module#MultiThreadModule' },
      { path:'html', loadChildren: 'app/nulidexiaoma/module/html/html.module#HtmlModule' },
      { path:'javascript', loadChildren: 'app/nulidexiaoma/module/javascript/javascript.module#JavascriptModule' },
      { path:'jquery', loadChildren: 'app/nulidexiaoma/module/jquery/jquery.module#JqueryModule' },
    ]
  },
];

export const routings = RouterModule.forChild(mainMenuRouters);
