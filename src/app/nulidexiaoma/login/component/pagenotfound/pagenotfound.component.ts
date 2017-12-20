import {Component, OnInit} from "@angular/core";
import {BaseComponent} from "../../../../base/base.component";
/**
 * Created by wenzailong on 2017/12/20.
 */
@Component({
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent  extends BaseComponent implements  OnInit{
  title = 'app';
  ngOnInit(): void {
  }
}
