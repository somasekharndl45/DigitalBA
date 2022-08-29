import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../models/bookmodel';
import { FilterBook } from '../models/filterBook';
import { SearchBook } from '../models/browseBook';
import { BookService } from '../services/book.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: BookModel[] = []
  book: BookModel = {
    bookId: 0,
    logo : '',
    title : '',
    category : '' ,  
    price : '',
    authorName : '',
    publisher : '',
    publishedDate: new Date,
    content : '',
    active : true
  }

  filterBook :FilterBook = {
    authorName:'',
    category:'',
    price: 0
  }

  isBuyClicked= false;
  isSearchClicked = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getallBooks()
  }

  public getallBooks(): void{
    this.bookService.getAllBook().subscribe
    (
      response => {
        this.books = response;
      }
    );
  }

  getBooksByFilter()
  {
    console.log("Search")
    this.bookService.getBookByFilter(this.filterBook).subscribe
    (
      response =>  { this.books = response;}
    );
  }

  buyClick() {
    console.log(this.isBuyClicked)
    this.isBuyClicked = true
};

}
