import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:click)': 'functionClick($event)',
  }
})


export class AppComponent {
  title = 'Albert W Garcia';
  open = false;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle( this.title );
  };
  ngOnInit(){
  };
  myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
    if(this.open == false){
      this.open = true;
    }
    else {
      this.open = false;
    }
  };
  functionClick(e: Event){
    if(this.open == true){
      if(e.target['classList'][0] != "btn"){
        this.myFunction();
      }
    }
  };
}