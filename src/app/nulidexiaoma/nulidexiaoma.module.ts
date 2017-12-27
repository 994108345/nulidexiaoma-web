import { NgModule } from '@angular/core';
import {UserManageModule} from "./module/usermanage/usermanage.module";
import {IndexModule} from "./module/index/index.module";


@NgModule({
  declarations: [
  ],
  imports: [
    UserManageModule,
    IndexModule,
  ],
  providers: [],
  bootstrap: []
})
export class NulidexiaomaModule { }
