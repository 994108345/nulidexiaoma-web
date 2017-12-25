/**
 * Created by wenzailong on 2017/12/20.
 */
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './base/login/login.component';
import {PageNotFoundComponent} from './base/login/component/pagenotfound/pagenotfound.component';
import {MainMenuComponent} from './base/mainmenu/mainmenu.component';
import {UserManageModule} from './nulidexiaoma/usermanage/usermanage.module';
import {LeftComponent} from './base/mainmenu/component/left/left.component';
import {UserManageComponent} from './nulidexiaoma/usermanage/usermanage.component';
import {IndexComponent} from './base/mainmenu/component/index/index.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'userManage', component: UserManageComponent },
    ]
  },
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
