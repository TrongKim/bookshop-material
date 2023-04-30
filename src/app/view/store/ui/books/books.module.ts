import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../../../share/header/header.module";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BooksComponent } from "./books.component";

@NgModule({
    imports: [
        HeaderModule,
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild([
            {
                path: '',
                component: BooksComponent
            }
        ])
    ],
    declarations: [
        BooksComponent
    ],
    exports: [
        BooksComponent
    ],
})
export class BooksModule { }