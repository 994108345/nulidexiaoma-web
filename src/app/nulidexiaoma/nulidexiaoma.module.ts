import { NgModule } from '@angular/core';
import {UserManageModule} from "./module/usermanage/usermanage.module";
import {IndexModule} from "./module/index/index.module";
import {RoleManageModule} from "./module/rolemanage/rolemanage.module";
import {RedisStudyModule} from "./module/redisstudy/redisstudy.module";
import {MultiThreadModule} from "./module/multithread/multithread.module";


@NgModule({
  declarations: [
  ],
  imports: [
    UserManageModule,
    RoleManageModule,
    RedisStudyModule,
    MultiThreadModule,
    IndexModule,
  ],
  providers: [],
  bootstrap: []
})
export class NulidexiaomaModule { }
