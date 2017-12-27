import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ButtonModule, GrowlModule, InputTextModule, MessagesModule} from 'primeng/primeng';
import {HttpModule} from '@angular/http';
import {MessageService} from 'primeng/components/common/messageservice';
import {Router, RouterModule} from '@angular/router';
import {CommonService} from "../../../base/service/common/common.service";
import {WzlAlertService} from "../../../base/service/wzlalert/wzlalert.service";
import {MainComponent} from "./component/main.component";
import {IndexComponent} from "./index.component";
import {routing} from "./index.component.routing";


@NgModule({
  imports: [
    InputTextModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    RouterModule,
    routing
  ],
  declarations: [
    MainComponent,
    IndexComponent,
  ],
  providers: [CommonService, WzlAlertService, MessageService],
})
export class IndexModule { }
