import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login.component.routing";
import {MainComponent} from "./component/main.component";
import {CommonService} from "../service/common/common.service";
import {FormsModule} from "@angular/forms";

import {ButtonModule, GrowlModule, InputTextModule, MessagesModule} from "primeng/primeng";
import {HttpModule} from "@angular/http";
import {WzlAlertService} from "../service/wzlalert/wzlalert.service";
import {MessageService} from "primeng/components/common/messageservice";
import {Router, RouterModule} from "@angular/router";


@NgModule({
  imports: [
    InputTextModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    RouterModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    MainComponent
  ],
  providers: [CommonService,WzlAlertService,MessageService],
})
export class LoginModule { }
