import { Injectable } from '@angular/core';
import { Mentor } from '../Models/mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  path: String = 'http://localhost:1802/api/Student';
  constructor(private _client : HttpClient) { }
  public SearchMentor(skill,from_timeslot,to_timeslot): Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/User_Search_Mentor/'+skill+'/'+from_timeslot+'/'+to_timeslot);
  }
}
