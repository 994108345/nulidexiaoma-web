import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {routing} from "./login.component.routing";
import {MainComponent} from "./component/main.component";
import {PageNotFoundComponent} from "./component/pagenotfound/pagenotfound.component";
import {CommonService} from "../service/common/common.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {ButtonModule, GrowlModule, InputTextModule, MessagesModule} from "primeng/primeng";
import {HttpModule} from "@angular/http";
import {WzlAlertService} from "../service/wzlalert/wzlalert.service";
import {MessageService} from "primeng/components/common/messageservice";
import {Router, RouterModule} from "@angular/router";


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
    LoginComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  providers: [CommonService,WzlAlertService,MessageService],
})
export class LoginModule { }
