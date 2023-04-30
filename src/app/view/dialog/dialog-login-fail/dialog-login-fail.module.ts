import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogLoginFailComponent } from './dialog-login-fail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DialogLoginFailComponent,
  ],
  exports: [
    DialogLoginFailComponent
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
export class DialogLoginFailModule { }
