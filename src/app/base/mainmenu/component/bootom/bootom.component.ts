import {Component, Injector, OnInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {AbstractComponent} from "../../../common/abstract.component";
import {CommonRouters} from "../../../service/common/common.config";

@Component({
  selector:'main-bootom',
  templateUrl: './bootom.component.html',
  styleUrls: ['./bootom.component.css']
})
export class BootomComponent extends AbstractComponent implements OnInit{
  menuItems: MenuItem[];

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
  }
}
