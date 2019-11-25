import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-mentor-sign-in',
  templateUrl: './mentor-sign-in.component.html',
  styleUrls: ['./mentor-sign-in.component.css']
})
export class MentorSignInComponent implements OnInit {

  [x: string]: any;
  email;
  pwd;
  userList:User[]=[];
  
  constructor(private http:HttpClient,private router:Router,private _service:LoginService) { }
  ngOnInit() {
  }
  public Login()
  {
    this._service.Login(this.email,this.pwd).subscribe(data=>{
      console.log(data)
      if(data.message=='User')
      {
       
        localStorage.setItem('token',data.token);
        this.router.navigate(['userboard'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Mentor')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['mentorboard'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Admin')
      {
        this.router.navigate(['adminboard'],{relativeTo:this._activatedRoute});
      }
     
      else
      {
        console.log("Nothing found");
      }

    },
    err=>{
       console.log("subscribe err");
    });
  }
    
 

}