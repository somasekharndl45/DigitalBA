import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../models/bookmodel';

@Injectable({
    providedIn: 'root'
  })
export class AuthorService {

  
   bookUrl =  'https://author20220828134232.azurewebsites.net/Author/CreateBook'
    constructor(private http: HttpClient) { }

    createBook(bookModel: BookModel): Observable<BookModel> {
        console.log('Inside servce')
        return this.http.post<BookModel>(this.bookUrl, bookModel);
    }

}