import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyBook } from '../models/purchaseBook';
import { PaymentDetails } from '../models/paymentModel';

@Injectable({
  providedIn: 'root'
})
export class BuyBookService {
    baseUrl = 'https://localhost:7285/Payment/PurchaseBook/';

    constructor(private http: HttpClient) { }

    purchaseBook( buyBook: any):Observable<any>{
        return this.http.post<any>(this.baseUrl, buyBook );
    }

    getInvoice(paymentId : number):Observable<PaymentDetails>{
      let queryParams = new HttpParams
      queryParams = queryParams.append("paymentId", 12)
      return this.http.get<PaymentDetails>(this.baseUrl + "VieworDownloadInvoice/", {params:queryParams})
    
    }
  

}