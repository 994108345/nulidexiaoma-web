import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LeftComponent} from './base/mainmenu/component/left/left.component';
import {TopComponent} from './base/mainmenu/component/top/top.component';
import {IndexComponent} from './base/mainmenu/component/index/index.component';
import {RemoveNullStringPipe} from './base/pipeline/RemoveNullString.pipe';
import {RouterModule} from '@angular/router';
import {NulidexiaomaModule} from './nulidexiaoma/nulidexiaoma.module';
import {LoginModule} from './base/login/login.module';
import {PanelMenuModule} from 'primeng/primeng';
import {routing} from './app.routing';

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
