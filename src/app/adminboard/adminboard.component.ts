import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {

  UserName="";
  constructor(private router:Router) {
    this.UserName=localStorage.getItem('token');
   }

  ngOnInit() {
    // if(localStorage.getItem('token')==null)
    // {
    //   this.router.navigate(['contact']);
    // }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['mentor-sign-in']);
 
   }
}

