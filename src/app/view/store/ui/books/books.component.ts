import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/store/store.model';
import { SubSink } from 'subsink';
import { BookService } from './books.service';
import { IAccountClient } from 'src/app/model/login/login.model';
import { CookieUtils } from 'src/app/util/cookie.utils';
import { cookieEnums } from 'src/app/enum/cookie.enum';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

  books: IBook[] = [];

  userData: IAccountClient | null = null;

  protected subs = new SubSink();

  constructor(protected bookService: BookService) { }

  ngOnInit(): void {
    this.getUserData();
    this.onGetBooks();
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getUserData(): void {
    this.userData = JSON.parse(CookieUtils.getCookie(cookieEnums.USER_DATA)) as IAccountClient;
  }

  getBooks(): void {
    this.bookService.getBooks();
  }

  //======================OBSERVABLE FUNCTION======================

  onGetBooks(): void {
    this.subs.add(this.bookService.books$
      .subscribe(books => this.books = books));
  }

  //======================DOM EVENT FUNCTION======================

}
