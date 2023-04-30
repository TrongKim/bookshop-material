import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddBookService } from './add-books.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { SubSink } from 'subsink';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddProductComponent } from '../dialog-add-product/dialog-add-product.component';
import { IAccountClient } from 'src/app/model/login/login.model';
import { CookieUtils } from 'src/app/util/cookie.utils';
import { cookieEnums } from 'src/app/enum/cookie.enum';
import { numberValidator } from 'src/app/validator/number.validator';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss'],
  providers: [AddBookService]
})
export class AddBooksComponent implements OnInit {

  bookDataForm: FormGroup = new FormGroup({
    productName: new FormControl('', [Validators.minLength(7), Validators.maxLength(100), Validators.required]),
    productDescription: new FormControl('', [Validators.minLength(20), Validators.maxLength(200), Validators.required]),
    productTag: new FormControl('', [Validators.minLength(7), Validators.maxLength(100), Validators.required]),
    price: new FormControl<number>(0, [Validators.maxLength(20), Validators.required, numberValidator()]),
  });

  imageSrc: string | undefined;

  isWaitingAddBook: boolean = false;

  protected userData: IAccountClient | null = null;

  protected subs = new SubSink();

  constructor(protected addBookService: AddBookService, protected dialog: MatDialog, protected cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getUserData();
    this.onAddBook();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openDialog(message: string): void {
    if(!this.userData) return;
    this.dialog.open(DialogAddProductComponent, {
      data: { message: message, username: this.userData?.username },
    });
  }

  getUserData(): void {
    this.userData = JSON.parse(CookieUtils.getCookie(cookieEnums.USER_DATA)) as IAccountClient;
  }

  //=======================DOM EVENT FUNCTION=======================

  clickEventAddBook(): void {
    this.isWaitingAddBook = true;
    if (!this.addBookService.addBook({
      price: this.bookDataForm.get('price')?.value,
      product_name: this.bookDataForm.get('productName')?.value,
      product_description: this.bookDataForm.get('productDescription')?.value,
      product_image: this.imageSrc,
      product_tag: this.bookDataForm.get('productTag')?.value,
    })) {
      this.isWaitingAddBook = false;
      this.openDialog('Thêm sách thất bại hãy kiếm tra lại thông tin về sách');
    }
  }

  changeEventChoiceFile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement.files) return;
    this.subs.add(this.addBookService.readFile$(inputElement.files[0]).pipe(take(1)).subscribe(fileSrc => {
      this.imageSrc = fileSrc;
    }));
  }

  //=====================OBSERVABLE FUNCTION=====================

  onAddBook(): void {
    this.subs.add(this.addBookService.sateAddBook$.subscribe(state => {
      this.isWaitingAddBook = false;
      
      if(state) {
        this.bookDataForm.setValue({
          price: '',
          productName: '',
          productDescription: '',
          productTag: '',
        });
        this.imageSrc = undefined;
        this.openDialog('Thêm sách thành công');
        this.cdr.detectChanges();
        return;
      }
      this.openDialog('Thêm sách thất bại hãy kiếm tra lại thông tin về sách');
    }));
  }

}
