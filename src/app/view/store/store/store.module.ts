import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { StoreComponent } from "./store.component";
import { HeaderModule } from "../../share/header/header.module";
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from "@angular/forms";
import { AdminGuard } from "src/app/guard/admin.guard";
import { FooterModule } from "../../share/footer/footer.module";

@NgModule({
    imports: [
        HeaderModule,
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        FooterModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: StoreComponent,
                loadChildren: () => import('../ui/books/books.module').then(m => m.BooksModule)
            },
            {
                path: 'add-book',
                component: StoreComponent,
                loadChildren: () => import('../ui/add-books/add-books.module').then(m => m.AddBooksModule),
                canActivate: [AdminGuard]
            }
        ])
    ],
    declarations: [
        StoreComponent
    ],
    exports: [
        StoreComponent
    ],
})
export class StoreModule { }