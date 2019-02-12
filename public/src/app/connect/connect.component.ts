import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {};

  ngOnInit() {
  };

  onModal(){
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
  };

  onClose(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
  }
}