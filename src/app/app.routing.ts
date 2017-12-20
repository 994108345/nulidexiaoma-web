/**
 * Created by wenzailong on 2017/12/20.
 */
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LoginComponent} from "./nulidexiaoma/login/login.component";
import {LoginModule} from "./nulidexiaoma/login/login.module";
import {PageNotFoundComponent} from "./nulidexiaoma/login/component/pagenotfound/pagenotfound.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: 'app', component: LoginComponent },
  { path: 'login/:id', component: LoginComponent },
  { path: 'login', component: LoginComponent,data:{title:'login page'} },
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

/*  { path: '404', component: App404Component },
  { path: 'forget', component: ForgetComponent },
  {
    path: '', component: AppComponent,
    canActivate: [PreloadGuard],
    canActivateChild: [CommonGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [SystemCacheCleanGuard]
      },
      {
        path: 'wms', loadChildren: './wmsweb/wmsweb.module#WmsWebModule',
        canActivate: [SystemCacheCleanGuard]
      }
      { path: '**', redirectTo: 'dashboard' }
    ]
  }*/
];
/*export const routing = RouterModule.forRoot(routes, { useHash: false });*/
export const routing = RouterModule.forChild(routes);
