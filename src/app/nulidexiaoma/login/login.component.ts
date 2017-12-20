import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../base/base.component";

@Component({
  template: '<router-outlet></router-outlet>'
})
export class LoginComponent extends BaseComponent implements  OnInit{
  title = 'app';
  ngOnInit() {

  }

}
