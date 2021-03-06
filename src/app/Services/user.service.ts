import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { User} from '../Models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  path:string='http://localhost:1802/api/Student';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<User[]>
  {
    return this._client.get<User[]>(this.path+'/GetAll');
  }
  public Add(item:User):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  // public search(id:number):Observable<Mentor>{
  //   return this._client.get<Mentor>(this.path+'/GetById/'+id);
  // }
  public Update(item:User){
    return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:Number){
    return this._client.delete(this.path+'/Delete/'+id);
  }
  public Block(id:Number){
    return this._client.put(this.path+'/BlockUser/'+id,id);
  }
  public UnBlock(id:Number){
    return this._client.put(this.path+'/UnBlockUser/'+id,id);
  }
}


