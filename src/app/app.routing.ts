/**
 * Created by wenzailong on 2017/12/20.
 */
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './base/login/component/pagenotfound/pagenotfound.component';
import {IndexComponent} from './base/mainmenu/component/index/index.component';
import {LoginModule} from "./base/login/login.module";
import {MainMenuModule} from "./base/mainmenu/mainmenu.module";
import {UserManageModule} from "./nulidexiaoma/module/usermanage/usermanage.module";


export const routes: Routes = [
  { path: 'login', component: LoginModule},
 /* { path: 'login', component: LoginModule,outlet:'pop'},*/
  { path: 'mainMenu', component: MainMenuModule,outlet:'pop',},
  { path: 'mainMenu', component: MainMenuModule},
  {
    path: 'nulidexiaoma-web',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginModule,outlet:'main-router'},
      { path: 'mainMenu', component:IndexComponent,
      },
    ]
  },
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  /*{ path: '', redirectTo:'login', pathMatch: 'full' },*/
 /* { path: 'mainMenu', component: AppComponent,
    children:[
      { path: 'userManage', component: UserManageComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },*/
];
export const routing = RouterModule.forRoot(routes, { useHash: false });



/*@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}*/
