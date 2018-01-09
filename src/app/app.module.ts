import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RemoveNullStringPipe} from './base/pipeline/RemoveNullString.pipe';
import {RouterModule} from '@angular/router';
import {ButtonModule, GrowlModule, InputTextModule, MessagesModule, PanelMenuModule} from 'primeng/primeng';
import {AppRoutingModule} from './app.routing';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PageNotFoundComponent} from "./base/login/component/pagenotfound/pagenotfound.component";
import {AppGuardService} from "./base/guard/app.gurad.service";
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RemoveNullStringPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    RouterModule,
    PanelMenuModule,
    MessagesModule,
    GrowlModule,
    AppRoutingModule,
  ],
  providers: [
    AppGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
