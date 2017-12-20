/**
 * Created by wenzailong on 2017/12/20.
 */
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LoginComponent} from "./nulidexiaoma/login/login.component";
import {LoginModule} from "./nulidexiaoma/login/login.module";

export const routes: Routes = [
  { path: 'login', component: LoginModule }
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
 */
      /*  { path: '**', redirectTo: 'dashboard' }
    ]
  }*/
];
/*export const routing = RouterModule.forRoot(routes, { useHash: false });*/
export const routing = RouterModule.forChild(routes);
