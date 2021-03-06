import {Component, Injector, OnInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {AbstractComponent} from "../../../common/abstract.component";
import {CommonRouters} from "../../../service/common/common.config";

@Component({
  selector:'main-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent extends AbstractComponent implements OnInit{
  menuItems: MenuItem[];

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
  }

}
