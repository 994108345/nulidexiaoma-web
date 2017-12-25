import { NgModule } from '@angular/core';
import {MainComponent} from "./component/main.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {ButtonModule, GrowlModule, InputTextModule, MessagesModule} from "primeng/primeng";
import {HttpModule} from "@angular/http";
import {MessageService} from "primeng/components/common/messageservice";
import {Router, RouterModule} from "@angular/router";
import {CommonService} from "../../base/service/common/common.service";
import {WzlAlertService} from "../../base/service/wzlalert/wzlalert.service";
import {routing} from "./usermanage.component.routing";
import {UserManageComponent} from "./usermanage.component";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MainComponent,UserManageComponent,
  ],
  providers: [CommonService,WzlAlertService,MessageService],
})
export class UserManageModule { }
