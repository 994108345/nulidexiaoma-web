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
import {CommonService} from "../../../base/service/common/common.service";
import {WzlAlertService} from "../../../base/service/wzlalert/wzlalert.service";
import {CommonModule} from "@angular/common";
import {WzlCacheService} from "../../../base/service/wzlcache/wzlceche.service";
import {routing} from "../javascript/javascript.component.routing";
import {JqueryComponent} from "./jquery.component";


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
    JqueryComponent,
  ],
  providers: [CommonService, WzlAlertService, MessageService,WzlCacheService],
})
export class JqueryModule { }
