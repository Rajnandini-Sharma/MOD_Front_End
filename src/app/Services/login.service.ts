import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  path:string="http://localhost:1808/api/LogIn";
  constructor(private _client:HttpClient) { }
  public Login(email:string,pwd:string):Observable<any>
  {
    return this._client.get<any>(this.path+'/Validate/'+email+'/'+pwd);

  }

}
