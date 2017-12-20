import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {routing} from "./login.component.routing";
import {MainComponent} from "./component/main.component";
import {PageNotFoundComponent} from "./component/pagenotfound/pagenotfound.component";
import {CommonService} from "../../base/common.service";


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    MainComponent
  ],
  providers: [CommonService],
})
export class LoginModule { }
