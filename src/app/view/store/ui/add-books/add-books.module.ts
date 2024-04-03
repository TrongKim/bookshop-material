import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../../../share/header/header.module";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from "@angular/forms";
import { AddBooksComponent } from "./add-books.component";
import { DialogAddProductModule } from "../dialog-add-product/dialog-add-product.module";
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
    imports: [
        HeaderModule,
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatSliderModule,
        ReactiveFormsModule,
        DialogAddProductModule,
        RouterModule.forChild([
            {
                path: '',
                component: AddBooksComponent
            }
        ])
    ],
    declarations: [
        AddBooksComponent
    ],
    exports: [
        AddBooksComponent
    ],
})
export class AddBooksModule { }