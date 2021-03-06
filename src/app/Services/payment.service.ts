import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  path: String = 'http://localhost:1803/api/Payment';
  constructor(private _client : HttpClient) { }
  public GetAll():Observable<Payment[]>
  {
    return this._client.get<Payment[]>(this.path+'/GetAll');
  }
}
