import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../models/bookmodel';

@Injectable({
    providedIn: 'root'
  })
export class AuthorService {

    bookUrl = 'https://localhost:7011/Author/CreateBook/'

    constructor(private http: HttpClient) { }

    createBook(bookModel: BookModel): Observable<BookModel> {
        console.log('Inside servce')
        return this.http.post<BookModel>(this.bookUrl, bookModel);
    }

}