import {NgModule} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogAddProductComponent } from './dialog-add-product.component';

@NgModule({
  declarations: [
    DialogAddProductComponent,
  ],
  exports: [
    DialogAddProductComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class DialogAddProductModule { }
