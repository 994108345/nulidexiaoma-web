import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {routing} from "./login.component.routing";
import {MainComponent} from "./component/main.component";
import {BaseService} from "../../base/base.service";


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    LoginComponent,
    MainComponent
  ],
  providers: [BaseService],
})
export class LoginModule { }
