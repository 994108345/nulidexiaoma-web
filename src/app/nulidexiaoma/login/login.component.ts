import {Component, OnInit} from '@angular/core';
import {AbstractComponent} from "../../base/abstract.component";

@Component({
  template: '<router-outlet></router-outlet>'
})
export class LoginComponent {
  title = 'app';
  ngOnInit() {

  }

}
