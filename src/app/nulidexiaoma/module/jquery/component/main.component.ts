import {Component, Injector, OnInit} from '@angular/core';
import {AbstractComponent} from "../../../../base/common/abstract.component";
import * as $ from 'jquery';
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

  jqueryHide(){
   $("#p1").toggle("fast",);
  }
  jqueryShow(){
    $('#p1').show();
  }
  //淡入
  fade(){
    $("#p2").fadeToggle("slow");
  }
  //滑动
  slideDown(){
    $("#p3").slideDown("slow");
  }
  slideUp(){
    $("#p3").slideUp("slow");
  }
  slideToggle(){
    $("#p3").slideToggle("slow");
  }

  animate(){
    $("#p4").animate({left:'100px'},"slow");
    $("#p4").animate({fontSize:'3em'},"slow");
    $("#p4").animate({left:'500'},"slow");
    $("#p4").animate({right:'50'},"slow");
    $("#p4").animate({fontSize:'2em'},"slow");
    $("#p4").animate({right:'100px'},"5000");
  }
  fun1(){

  }



}
