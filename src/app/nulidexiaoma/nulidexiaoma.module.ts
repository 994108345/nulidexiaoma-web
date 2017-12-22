import { NgModule } from '@angular/core';
import {LoginModule} from "./login/login.module";
import {MainMenuModule} from "./mainmenu/mainmenu.module";


@NgModule({
  declarations: [
  ],
  imports: [
    LoginModule,
    MainMenuModule
  ],
  providers: [],
  bootstrap: []
})
export class NulidexiaomaModule { }
