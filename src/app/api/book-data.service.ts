import { Injectable } from "@angular/core";
import { IBook, IDataAddBook } from "../model/store/store.model";

@Injectable({
    providedIn: 'root'
})
export class BookDataService {
    constructor() {}

    private books: IBook[] = [
        {
            id: 'book1',
            price: 30,
            product_description: 'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
            product_image: 'assets/img/Book.png',
            product_name: 'Atomic One’s',
            product_tag: 'Printed Book'
        },
        {
            id: 'book2',
            price: 400,
            product_description: 'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
            product_image: 'assets/img/Book.png',
            product_name: 'Black book',
            product_tag: 'Printed Book'
        },
        {
            id: 'book3',
            price: 35,
            product_description: 'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
            product_image: 'assets/img/Book.png',
            product_name: 'Another Book',
            product_tag: 'Printed Book'
        },
        {
            id: 'book4',
            price: 24,
            product_description: 'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
            product_image: 'assets/img/Book.png',
            product_name: 'Infinite Book',
            product_tag: 'Printed Book'
        },
        {
            id: 'book5',
            price: 30,
            product_description: 'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
            product_image: 'assets/img/Book.png',
            product_name: 'Atomic One’s',
            product_tag: 'Printed Book'
        },
        {
            id: 'book6',
            price: 30,
            product_description: 'Many variations of passages of Lorem Ipsum willing araise alteration in some form.',
            product_image: 'assets/img/Book.png',
            product_name: 'Atomic One’s',
            product_tag: 'Printed Book'
        },
    ];

    addBook(book: IDataAddBook): string {
        const id = 'book' + new Date().getTime();
        this.books.push({ ...book, id: id });

        return id;
    }

    getBooks(): IBook[] {
        return this.books;
    }
}