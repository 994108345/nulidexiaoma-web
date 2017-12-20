import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RemoveNullStringPipe} from "./base/pipeline/RemoveNullString.pipe";
import {NulidexiaomaModule} from "./nulidexiaoma/nulidexiaoma.module";
import {routing} from "./nulidexiaoma/login/login.component.routing";

@NgModule({
  declarations: [
    AppComponent,
    RemoveNullStringPipe
  ],
  imports: [
    BrowserModule,
    NulidexiaomaModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
