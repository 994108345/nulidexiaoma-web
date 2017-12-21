import {ActivatedRoute, Router} from "@angular/router";
import {Injector, OnDestroy, OnInit} from "@angular/core";
/**
 * Created by wenzailong on 2017/12/20.
 */
export declare class BaseComponent implements OnDestroy{
  injector: Injector;
  constructor(injector: Injector);
  ngOnDestroy(): void ;
  ngOnInit(): void;

}
