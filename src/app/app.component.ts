import {Component, OnInit} from '@angular/core';
import {CommonRouters} from "./base/common.config";
import {BaseComponent} from "./base/base.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit{
  ngOnInit() {
  }
}
