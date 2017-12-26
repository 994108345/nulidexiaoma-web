import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RemoveNullStringPipe} from './base/pipeline/RemoveNullString.pipe';
import {RouterModule} from '@angular/router';
import {NulidexiaomaModule} from './nulidexiaoma/nulidexiaoma.module';
import {ButtonModule, GrowlModule, InputTextModule, MessagesModule, PanelMenuModule} from 'primeng/primeng';
import {routing} from './app.routing';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginModule} from "./base/login/login.module";
import {MainMenuModule} from "./base/mainmenu/mainmenu.module";
@NgModule({
  declarations: [
    AppComponent,
    RemoveNullStringPipe
  ],
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
    PanelMenuModule,
    MessagesModule,
    InputTextModule,
    GrowlModule,

    MainMenuModule,
    LoginModule,
    NulidexiaomaModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
