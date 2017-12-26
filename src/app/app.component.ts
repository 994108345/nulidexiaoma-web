import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "./base/common/abstract.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends AbstractComponent implements OnInit{
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
  }
}
