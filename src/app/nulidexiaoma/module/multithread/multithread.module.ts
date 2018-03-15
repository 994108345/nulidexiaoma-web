import { NgModule } from '@angular/core';
import {MainComponent} from './component/main.component';
import {FormsModule} from '@angular/forms';

import {
  ButtonModule, GrowlModule, InputTextModule,
  MessagesModule
} from 'primeng/primeng';
import {HttpModule} from '@angular/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {Router, RouterModule} from '@angular/router';
import {routing} from './multithread.component.routing';
import {CommonService} from "../../../base/service/common/common.service";
import {WzlAlertService} from "../../../base/service/wzlalert/wzlalert.service";
import {MultiThreadComponent} from "./multithread.component";
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
    InputTextModule,
    routing
  ],
  declarations: [
    MainComponent,
    MultiThreadComponent,
  ],
  providers: [CommonService, WzlAlertService, MessageService],
})
export class MultiThreadModule { }
