import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../base/abstract.component";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{
  constructor(public injector:Injector){
    super(injector);
  }
  text: string;

  disabled: boolean = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  ngOnInit(): void {

  }
}
