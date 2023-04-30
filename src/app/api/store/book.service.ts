import { Injectable } from '@angular/core';
import { Observable, debounceTime, of } from 'rxjs';
import { IBook, IDataAddBook } from 'src/app/model/store/store.model';
import { BookDataService } from '../book-data.service';

@Injectable({
    providedIn: 'root'
})
export class APIBookService {
    constructor(protected bookDataService: BookDataService) {}

    addBook(bookData: IDataAddBook): Observable<IBook> {
        const id = this.bookDataService.addBook(bookData);
        return of({
            ...bookData,
            id: id
        }).pipe(debounceTime(300));
    }

    getBooks(): Observable<IBook[]> {
        return of(this.bookDataService.getBooks());
    }
}