import { NgModule } from '@angular/core';
import {MainComponent} from './component/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  ButtonModule, DataListModule, DataTableModule, GrowlModule, InputTextModule, MessagesModule,
  SharedModule, TreeModule, TreeTableModule, TreeNode, ScheduleModule, PickListModule, DropdownModule
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
import {AbstractComponent} from "../../../base/common/abstract.component";


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
    ReactiveFormsModule,

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
