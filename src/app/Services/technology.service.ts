import { Injectable } from '@angular/core';
import { Technology } from '../Models/technology';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  path: String = 'http://localhost:1800/api/Technology';
  constructor(private _client : HttpClient) { }
  public GetAll():Observable<Technology[]>
  {
    return this._client.get<Technology[]>(this.path+'/GetAll');
  }
  public Add(item:Technology):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
}
