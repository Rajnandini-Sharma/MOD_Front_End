import { Component, OnInit } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { MentorService } from '../Services/mentor.service';


@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;
    constructor(private _service:MentorService) {
      this.item=new Mentor();
      // this._service.GetAll().subscribe(k=>this.list=k);
     }
  
    ngOnInit() {
    }
    public Add(){
      this.item.mentor_active=true;
      this.item.mentor_Avail=true;
      this._service.Add(this.item).subscribe(k=>this.msg=k);
    }
    // public Search(){
    //   this._service.Search(this.item.eid).subscribe(k=>this.item=k);
    //   console.log(this.item);
    // }
    // public Update(){
    // this._service.Update(this.item).subscribe(k=>k=this.msg);
    // }
    // public Delete(){
    //   this._service.Delete(this.item.mentorId).subscribe(k=>k=this.msg);
    // }
  

}

