import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credential';
import { SearchBook } from '../models/browseBook';
import { BookModel } from '../models/bookmodel';
import { FilterBook } from '../models/filterBook';

@Injectable({
    providedIn: 'root'
  })
export class BookService {

    allbookUrl = 'https://localhost:7125/Reader/DisplayBooks/'
    filterbookUrl = 'https://localhost:7125/Reader/SearchBooks/'
    authbookUrl = 'https://localhost:7125/Reader/DisplayBooks/'
    editbookUrl = 'https://localhost:7011/Author/EditBook/'

    constructor(private http: HttpClient) { }

    getBookByFilter(filterBook: FilterBook): Observable<BookModel[]> {
      console.log(filterBook)
      let params = {'authorName': filterBook.authorName, 'price': filterBook.price, 'category': filterBook.category }
      let queryParams = new HttpParams({fromObject:params})
        return this.http.get<BookModel[]>(this.filterbookUrl, {params : queryParams});
      }

    getAllBook(): Observable<BookModel[]> {
      return this.http.get<BookModel[]>(this.allbookUrl);
    }

    getAuthBook(userName : any): Observable<BookModel[]> {
      let queryParams = new HttpParams()
      queryParams = queryParams.append('userName', userName)
      return this.http.get<BookModel[]>(this.authbookUrl, {params : queryParams});
    }

    onEditBook(book : BookModel): Observable<any> 
      {
      return this.http.put<any>(this.editbookUrl,book);
    }

}