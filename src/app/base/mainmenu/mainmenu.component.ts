
import {Component, Injector, OnInit} from "@angular/core";
import {AbstractComponent} from "../common/abstract.component";
@Component({
  template: '<router-outlet></router-outlet>'
})
export class MainMenuComponent extends AbstractComponent implements  OnInit{
  constructor(injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
   /* this.router.navigate(['mainMenu/index']);*/
  }

}
