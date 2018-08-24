import { NgModule } from '@angular/core';
import {UserManageModule} from "./module/usermanage/usermanage.module";
import {IndexModule} from "./module/index/index.module";
import {RoleManageModule} from "./module/rolemanage/rolemanage.module";
import {RedisStudyModule} from "./module/redisstudy/redisstudy.module";
import {MultiThreadModule} from "./module/multithread/multithread.module";
import {HtmlModule} from "./module/html/html.module";
import {JavascriptModule} from "./module/javascript/javascript.module";
import {JqueryModule} from "./module/jquery/jquery.module";
import {LoginTokenModule} from "./module/logintoken/logintoken.module";


@NgModule({
  declarations: [
  ],
  imports: [
    UserManageModule,
    RoleManageModule,
    RedisStudyModule,
    MultiThreadModule,
    IndexModule,
    HtmlModule,
    JqueryModule,
    JavascriptModule,
    LoginTokenModule,
  ],
  providers: [],
  bootstrap: []
})
export class NulidexiaomaModule { }
