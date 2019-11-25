import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from '../Models/training';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  path: String = 'http://localhost:1818/api/Training';
  constructor(private _client : HttpClient) { }
  public GetAll():Observable<Training[]>
  {
    return this._client.get<Training[]>(this.path+'/GetAll');
  }
  public GetTrainingByUser(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByUser/'+id);
  }
  public GetTrainingBymentor(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByMentor/'+id);
  }
 
}
