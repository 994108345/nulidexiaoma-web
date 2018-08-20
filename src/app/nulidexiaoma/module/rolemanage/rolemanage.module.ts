import { NgModule } from '@angular/core';
import {MainComponent} from './component/main.component';
import {FormsModule} from '@angular/forms';

import {
  ButtonModule, ConfirmationService, ConfirmDialogModule, DataListModule, DataScrollerModule, DataTableModule,
  FieldsetModule,
  GrowlModule, InputTextModule,
  MessagesModule, PickListModule, ScheduleModule,
  SharedModule, TreeModule, TreeTableModule,
} from 'primeng/primeng';
import {HttpModule} from '@angular/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {Router, RouterModule} from '@angular/router';
import {CommonService} from "../../../base/service/common/common.service";
import {WzlAlertService} from "../../../base/service/wzlalert/wzlalert.service";
import {routing} from "./rolemanage.component.routing";
import {RoleManageComponent} from "./rolemanage.component";
import {CommonModule} from "@angular/common";
import {AddComponent} from "./component/add/add.component";
import {EditComponent} from "./component/edit/edit.component";


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
    FieldsetModule,
    DataTableModule,
    SharedModule,
    DataListModule,
    TreeTableModule,
    TreeModule,
    ScheduleModule,
    PickListModule,
    ConfirmDialogModule,//确认提示框
    routing
  ],
  declarations: [
    MainComponent,
    RoleManageComponent,
    AddComponent,
    EditComponent,
  ],
  providers: [CommonService, WzlAlertService, MessageService,ConfirmationService],
})
export class RoleManageModule { }
