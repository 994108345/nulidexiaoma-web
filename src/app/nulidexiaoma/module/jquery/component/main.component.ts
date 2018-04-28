import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import {BizRoot, CommonRouters} from "../../../../base/service/common/common.config";
import {Response, URLSearchParams, RequestOptionsArgs, Headers, RequestOptions} from '@angular/http';
import {escape} from "querystring";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractComponent implements OnInit{

  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
  }

}
