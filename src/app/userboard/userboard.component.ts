import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { Training } from '../Models/training';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { TrainingService } from '../Services/training.service';

@Component({
  selector: 'app-userboard',
  templateUrl: './userboard.component.html',
  styleUrls: ['./userboard.component.css']
})
export class UserboardComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;

  UserName:number;
  constructor(private router : Router,private _service:UserService,private _trservice:TrainingService) {
    this.UserName = +localStorage.getItem('token');
    this.item=new User();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.Student_Id=this.UserName;
    this.items=new Training();
   
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['login']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['login']);
 
   }
   public add()
  {
    this.addclick=1;
  }
   public Update()
{
  this.item.Student_active=true;
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public UserCurTrainings(){
  this._trservice.GetTrainingByUser(this.UserName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}


  }


