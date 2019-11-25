import { Component, OnInit } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { Training } from '../Models/training';
import { Router } from '@angular/router';
import { MentorService } from '../Services/mentor.service';
import { TrainingService } from '../Services/training.service';

@Component({
  selector: 'app-mentorboard',
  templateUrl: './mentorboard.component.html',
  styleUrls: ['./mentorboard.component.css']
})
export class MentorboardComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;


  MentorName:number;
  constructor(private router : Router,private _service:MentorService,private _trservice:TrainingService) {
    this.MentorName = +localStorage.getItem('token');
    this.item=new Mentor();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.mentorId=this.MentorName;
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
   this.router.navigate(['mentor-sign-in']);
 
   }
   public add()
  {
    this.addclick=1;
  }
   public Update()
{
 this.item.mentor_active=true;
 this.item.mentor_Avail=true;
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public MentorCurTrainings(){
  this._trservice.GetTrainingBymentor(this.MentorName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}



}
