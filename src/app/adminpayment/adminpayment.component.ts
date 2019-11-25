import { Component, OnInit } from '@angular/core';
import { Payment } from '../Models/payment';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'app-adminpayment',
  templateUrl: './adminpayment.component.html',
  styleUrls: ['./adminpayment.component.css']
})
export class AdminpaymentComponent implements OnInit {
  item:Payment;
  list:Payment[];
  msg:string;
  addclick;
  constructor(private _service:PaymentService) { 
    this.item=new Payment();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }
  ngOnInit() {
  }
}
