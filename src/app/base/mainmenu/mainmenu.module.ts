import { NgModule } from '@angular/core';
import {CommonService} from "../../base/service/common/common.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {ButtonModule, GrowlModule, InputTextModule, MenuItem, MessagesModule, PanelMenuModule} from "primeng/primeng";
import {HttpModule} from "@angular/http";
import {WzlAlertService} from "../../base/service/wzlalert/wzlalert.service";
import {MessageService} from "primeng/components/common/messageservice";
import {routings} from "./mainmenu.component.routing";
import {MainComponent} from "./component/main.component";
import {MainMenuComponent} from "./mainmenu.component";
import {LeftComponent} from "./component/left/left.component";
import {TopComponent} from "./component/top/top.component";
import {IndexComponent} from "./component/index/index.component";
import {NulidexiaomaModule} from "../../nulidexiaoma/nulidexiaoma.module";


@NgModule({
  imports: [
    InputTextModule,
    MessagesModule,
    GrowlModule,
    FormsModule,
    ButtonModule,
    HttpModule,
    PanelMenuModule,

    NulidexiaomaModule,
    routings
  ],
  declarations: [
    MainMenuComponent,
    LeftComponent,
    TopComponent,
    IndexComponent,
    MainComponent,
  ],
  providers: [CommonService,WzlAlertService,MessageService],
})
export class MainMenuModule { }
