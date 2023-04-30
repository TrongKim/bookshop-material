import { Injectable } from "@angular/core";
import { BehaviorSubject, take } from "rxjs";
import { APIBookService } from "src/app/api/store/book.service";
import { IBook } from "src/app/model/store/store.model";

@Injectable()
export class BookService {
    constructor(private apiBookService: APIBookService) {}

    protected readonly $books = new BehaviorSubject<IBook[]>([]);
    readonly books$ = this.$books.asObservable();

    getBooks(): void {
        this.apiBookService.getBooks().pipe(take(1)).subscribe(books => {
            this.$books.next(books);
        });
    }
}