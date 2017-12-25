import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RemoveNullStringPipe} from "./base/pipeline/RemoveNullString.pipe";
import {NulidexiaomaModule} from "./nulidexiaoma/nulidexiaoma.module";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./base/login/login.module";
import {routing} from "./app.routing";
import {MainMenuModule} from "./base/mainmenu/mainmenu.module";
import {LeftComponent} from "./base/mainmenu/component/left/left.component";
import {TopComponent} from "./base/mainmenu/component/top/top.component";
import {IndexComponent} from "./base/mainmenu/component/index/index.component";
import {PanelMenuModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    TopComponent,
    IndexComponent,

    RemoveNullStringPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NulidexiaomaModule,
    LoginModule,
    PanelMenuModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
