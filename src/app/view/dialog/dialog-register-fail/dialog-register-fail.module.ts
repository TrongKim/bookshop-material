import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogRegisterFailComponent } from './dialog-register-fail.component';

@NgModule({
  declarations: [
    DialogRegisterFailComponent,
  ],
  exports: [
    DialogRegisterFailComponent
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
export class DialogRegisterFailModule { }
