import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "./base/common/abstract.component";

@Component({
  selector: 'app-root',
  template:`
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends AbstractComponent implements OnInit{
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
  }
}
