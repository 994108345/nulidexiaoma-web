import { NgModule } from '@angular/core';
import {MainComponent} from './component/main.component';
import {FormsModule} from '@angular/forms';

import {
  ButtonModule, ConfirmDialogModule, DataListModule, DataTableModule, GrowlModule, InputTextModule,
  MessagesModule, PickListModule, ScheduleModule, SharedModule, TreeModule, TreeTableModule
} from 'primeng/primeng';
import {HttpModule} from '@angular/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {Router, RouterModule} from '@angular/router';
import {routing} from './redisstudy.component.routing';
import {CommonService} from "../../../base/service/common/common.service";
import {WzlAlertService} from "../../../base/service/wzlalert/wzlalert.service";
import {RedisStudyComponent} from "./redisstudy.component";
import {CommonModule} from "@angular/common";


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
    ConfirmDialogModule,
    routing
  ],
  declarations: [
    MainComponent,
    RedisStudyComponent,
  ],
  providers: [CommonService, WzlAlertService, MessageService],
})
export class RedisStudyModule { }
