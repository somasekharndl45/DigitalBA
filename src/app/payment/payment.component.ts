import { Component, OnInit } from '@angular/core';
import { BuyBook } from '../models/purchaseBook';
import { PaymentDetails } from '../models/paymentModel';
import { BuyBookService } from '../services/buybook.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isSuccessful = false;
  isBuyBookFailed =  false;
  errorMessage = ''
  paymentID : number =  0 

  buy : BuyBook = {
    buyerName : '',
    emailID : '',
    bookName: ''
  }

  paymentDetails : PaymentDetails = {
    paymentId : 0,
    buyerEmailId : '',
    buyerName: '',
    bookName: '',
    paymentDate: new Date
  }

  constructor(private buyBookService: BuyBookService) { }

  ngOnInit(): void {
    if(this.paymentID != 0)
    {
      this.invoice()
    }
  }

  onSubmit(){
    this.buyBookService.purchaseBook(this.buy)
    .subscribe(
      response => {
        console.log(response);
        this.paymentID = response
        this.paymentDetails.paymentId=response
        console.log(this.paymentID)
        this.isSuccessful = true;
      }
    );
    this.invoice()
  }

  invoice(){
    this.buyBookService.getInvoice(this.paymentID)
    .subscribe(
      response => {
         console.log(this.paymentID);
         this.paymentDetails  = response}
    );
  }

}
