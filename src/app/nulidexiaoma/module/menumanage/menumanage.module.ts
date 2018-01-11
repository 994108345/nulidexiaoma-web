import { NgModule } from '@angular/core';
import {MainComponent} from './component/main.component';
import {FormsModule} from '@angular/forms';

import {
  ButtonModule, DataListModule, DataTableModule, GrowlModule, InputTextModule, MessagesModule,
  SharedModule, TreeModule, TreeTableModule, TreeNode, ScheduleModule, PickListModule
} from 'primeng/primeng';
import {HttpModule} from '@angular/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {Router, RouterModule} from '@angular/router';
import {CommonService} from "../../../base/service/common/common.service";
import {WzlAlertService} from "../../../base/service/wzlalert/wzlalert.service";
import {CommonModule} from "@angular/common";
import {routing} from "./menumanage.component.routing";
import {MenuManageComponent} from "./menumanage.component";
import {AddComponent} from "./component/add/add.component";


@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    RouterModule,
    DataTableModule,
    SharedModule,
    DataListModule,
    TreeTableModule,
    TreeModule,
    ScheduleModule,
    PickListModule,
    routing
  ],
  declarations: [
    MainComponent,
    AddComponent,
    MenuManageComponent,
  ],
  providers: [CommonService, WzlAlertService, MessageService],
})
export class MenuManageModule { }
