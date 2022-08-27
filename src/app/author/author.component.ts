import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';
import { BookModel } from '../models/bookmodel';
import { SearchBook } from '../models/browseBook';
import { AuthorService } from '../services/author.service';
import { BookService } from '../services/book.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  isSuccessful = false
  errorMessage = ''
  isCreateBookFailed = false
  books : BookModel[] = []
  isCreateBookClicked = false
  isEditBookClicked = false
  isListBooks = false
  user : string | null = ''
  book: BookModel = {
    bookId:0,
    logo : '',
    title : '',
    category : '',   
    price : '',
    authorName : '',
    publisher : '',
    publishedDate: new Date,
    content : '',
    active : true
  }

  

 

  constructor(private authorService : AuthorService, private bookService: BookService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser()
    this.getBooks()
  }

  onSubmit(){
    if(this.user != null){
      this.book.authorName = this.user }
    this.authorService.createBook(this.book).subscribe(
      response => { this.book = response
        console.log(response);
        this.isCreateBookClicked = false;
      }
    );
    this.getBooks()
  }

  getBooks(): void{
    console.log(this.books)
    this.bookService.getAuthBook(this.user).subscribe
    (      
      response => { 
      console.log(response)
      this.books = response; }
    );
  }

  setBookAttributes(updatebook:BookModel)
  {
   this.book=updatebook
  }

  editBook(editbookdetails:BookModel)
  {
    console.log(editbookdetails)
    this.setBookAttributes(editbookdetails)
    console.log(this.book)
    this.isEditBookClicked = true
    this.isListBooks = true
  }

  createBookClick()
  {
    this.isCreateBookClicked = true
    this.isListBooks = true
  }

  onEditBook(){
    this.book.active=(this.book.active == true)
    this.bookService.onEditBook(this.book).subscribe
    (

      resposne => this.book=resposne
    );
    this.isListBooks = false
    this.isEditBookClicked = false
    this.getBooks()
  }

}
