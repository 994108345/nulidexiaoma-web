import { NgModule } from '@angular/core';
import {CommonService} from "../../base/service/common/common.service";
import {FormsModule} from "@angular/forms";

import {
  ButtonModule, DataListModule, DataTableModule, GrowlModule, InputTextModule, MenuItem, MessagesModule,
  PanelMenuModule, ScheduleModule, SharedModule,
  TreeModule, TreeTableModule
} from "primeng/primeng";
import {HttpModule} from "@angular/http";
import {WzlAlertService} from "../../base/service/wzlalert/wzlalert.service";
import {MessageService} from "primeng/components/common/messageservice";
import {routings} from "./mainmenu.component.routing";
import {MainComponent} from "./component/main.component";
import {MainMenuComponent} from "./mainmenu.component";
import {NulidexiaomaModule} from "../../nulidexiaoma/nulidexiaoma.module";
import {BootomComponent} from "./component/bootom/bootom.component";
import {TopComponent} from "./component/top/top.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    InputTextModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    PanelMenuModule,
    DataTableModule,
    SharedModule,
    DataListModule,
    TreeTableModule,
    TreeModule,
    ScheduleModule,
    NulidexiaomaModule,
    CommonModule,
    RouterModule,
    routings
  ],
  declarations: [
    MainMenuComponent,
    TopComponent,
    BootomComponent,
    MainComponent,
  ],
  providers: [CommonService,WzlAlertService,MessageService],
})
export class MainMenuModule { }
