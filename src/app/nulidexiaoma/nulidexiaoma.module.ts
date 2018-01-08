import { NgModule } from '@angular/core';
import {UserManageModule} from "./module/usermanage/usermanage.module";
import {IndexModule} from "./module/index/index.module";
import {RoleManageModule} from "./module/rolemanage/rolemanage.module";


@NgModule({
  declarations: [
  ],
  imports: [
    UserManageModule,
    RoleManageModule,
    IndexModule,
  ],
  providers: [],
  bootstrap: []
})
export class NulidexiaomaModule { }
