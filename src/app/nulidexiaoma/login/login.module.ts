import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {routing} from "./login.component.routing";
import {MainComponent} from "./component/main.component";
import {PageNotFoundComponent} from "./component/pagenotfound/pagenotfound.component";
import {CommonService} from "../../base/common.service";
import {ButtonModule, InputTextModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
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
