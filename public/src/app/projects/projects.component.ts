import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  slideIndex = 1;
  slideIndexDraft = 1;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
    this.showDivsDraft(this.slideIndexDraft);
    this.showDivs(this.slideIndex);
  };
  // Ninjaman Slides
  showDivs(n) {
    var i;
    var x = document.getElementsByClassName("socketSlides");
    var y = document.getElementsByClassName("socketText");
    var dots = document.getElementsByClassName("sdot");
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" show", " hide");
      y[i].className = y[i].className.replace(" show", " hide");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[this.slideIndex-1].className =  x[this.slideIndex-1].className.replace(" hide", " show");
    y[this.slideIndex-1].className =  y[this.slideIndex-1].className.replace(" hide", " show");
    dots[this.slideIndex-1].className += " white";
  };
  plusDivs(n) {
      this.showDivs(this.slideIndex += n);
  };
  currentDiv(n) {
      this.showDivs(this.slideIndex = n);
  };
  
  
  
  // Draft slides
  showDivsDraft(n) {
    var i;
    var x = document.getElementsByClassName("draftSlides");
    var y = document.getElementsByClassName("draftText");
    var dots = document.getElementsByClassName("ddot");
    if (n > x.length) {this.slideIndexDraft = 1}    
    if (n < 1) {this.slideIndexDraft = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" show", " hide");
      y[i].className = y[i].className.replace(" show", " hide");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[this.slideIndexDraft-1].className =  x[this.slideIndexDraft-1].className.replace(" hide", " show");
    y[this.slideIndexDraft-1].className =  y[this.slideIndexDraft-1].className.replace(" hide", " show");
    dots[this.slideIndexDraft-1].className += " white";
  };
  plusDivsDraft(n) {
    this.showDivsDraft(this.slideIndexDraft += n);
  };
  currentDivDraft(n) {
    this.showDivsDraft(this.slideIndexDraft = n);
  };
}