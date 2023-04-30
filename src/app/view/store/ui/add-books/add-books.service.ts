import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, debounceTime, take, timer } from "rxjs";
import { APIBookService } from "src/app/api/store/book.service";
import { Undefinable } from "src/app/model/custom-type.model";
import { IBook, IDataAddBook } from "src/app/model/store/store.model";

@Injectable()
export class AddBookService {
    constructor(private apiBookService: APIBookService) { }

    protected readonly $sateAddBook = new Subject<boolean>();
    readonly sateAddBook$ = this.$sateAddBook.asObservable();

    addBook(bookData: Undefinable<IDataAddBook>): boolean {
        if (!bookData.price) return false;
        if (!bookData.product_description) return false;
        if (!bookData.product_image) return false;
        if (!bookData.product_name) return false;
        if (!bookData.product_tag) return false;
        this.apiBookService.addBook({
            price: bookData.price,
            product_description: bookData.product_description,
            product_image: bookData.product_image,
            product_name: bookData.product_name,
            product_tag: bookData.product_tag
        }).pipe(take(1)).subscribe(() => {
            this.$sateAddBook.next(true);
        });
        return true;
    }

    readFile$(file: File): Observable<string> {
        const $fileSrc = new Subject<string>();
        const fileReader = new FileReader();
        fileReader['onload'] = () => {
            const fileUrl = fileReader['result'];
            if (typeof fileUrl === 'string') {
                $fileSrc.next(fileUrl);
            }
        }
        fileReader.readAsDataURL(file);
        return $fileSrc.asObservable();
    }

}