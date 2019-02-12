import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  num: number = 1;
  slideIndexone = 0;
  slideIndextwo = 0;
  slideIndexthree = 0;
  slideIndexFour: number = 0;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
    this.carouselone();
    this.carouseltwo();
    this.carouselthree();
    this.carouselfour();
  };
  carouselone() {
    var i;
    var x = document.getElementsByClassName("l_slides");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" show", " hide");
    }
    this.slideIndexone++;
    if (this.slideIndexone > x.length) {
      this.slideIndexone = 1;
    } 
    x[this.slideIndexone-1].className = x[this.slideIndexone-1].className.replace("hide", "show");
    setTimeout(()=>{
      this.carouselone();
    }, 2000);
  };
  carouseltwo() {
    var i;
    var x = document.getElementsByClassName("f_slides");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" show", " hide");
    }
    this.slideIndextwo++;
    if (this.slideIndextwo > x.length) {
      this.slideIndextwo = 1;
    } 
    x[this.slideIndextwo-1].className = x[this.slideIndextwo-1].className.replace("hide", "show");
    setTimeout(()=>{
      this.carouseltwo();
    }, 2000);
  };
  carouselthree() {
    var i;
    var x = document.getElementsByClassName("d_slides");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" show", " hide");
    }
    this.slideIndexthree++;
    if (this.slideIndexthree > x.length) {
      this.slideIndexthree = 1;
    } 
    x[this.slideIndexthree-1].className = x[this.slideIndexthree-1].className.replace("hide", "show");
    setTimeout(()=>{
      this.carouselthree();
    }, 2000);
  };
  carouselfour() {
    var i: number;
    var x = document.getElementsByClassName("o_slides");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" show", " hide");
    }
    this.slideIndexFour ++;
    if (this.slideIndexFour > x.length) {
      this.slideIndexFour = 1;
    } 
    x[this.slideIndexFour-1].className = x[this.slideIndexFour-1].className.replace("hide", "show");
    setTimeout(()=>{
      this.carouselfour();
    }, 2000);
  };

}
