import { Component, OnInit } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  skill;
  from_timeslot;
  to_timeslot;

  constructor(private _service : SearchService, private http: HttpClient) {
    
   }
 
  ngOnInit() {
  }
  public Search()
  {
    this._service.SearchMentor(this.skill,this.from_timeslot,this.to_timeslot).subscribe(k=>{this.list=k;
    console.log(k);
    });
}
}

