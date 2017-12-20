import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../base/base.component";

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  extends BaseComponent implements  OnInit{
  title = 'app';
  ngOnInit(): void {
  }
}
