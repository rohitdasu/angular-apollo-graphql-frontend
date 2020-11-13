import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from "chart.js";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('name')){
      this.router.navigate(['result']);
    }
  }

  storeName(name){
    localStorage.setItem('name',name);
  }

}
