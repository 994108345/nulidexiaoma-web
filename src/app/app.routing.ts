/**
 * Created by wenzailong on 2017/12/20.
 */
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./nulidexiaoma/login/login.component";
import {PageNotFoundComponent} from "./nulidexiaoma/login/component/pagenotfound/pagenotfound.component";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {MainMenuComponent} from "./nulidexiaoma/mainmenu/mainmenu.component";


export const routes: Routes = [
  { path: 'mainMenu', component: MainMenuComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'login', component: LoginComponent,data:{title:'login page'} },
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: '', component: AppComponent,
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];
/*export const routing = RouterModule.forRoot(routes, { useHash: false });*/
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
