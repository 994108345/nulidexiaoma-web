import {Component, Injector, OnInit} from "@angular/core";
import {AbstractComponent} from "../../../common/abstract.component";
/**
 * Created by wenzailong on 2017/12/20.
 */
@Component({
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent extends AbstractComponent implements OnInit{
  title = 'app';
  constructor(public injector:Injector){
    super(injector);
  }
  ngOnInit(): void {
  }
}
