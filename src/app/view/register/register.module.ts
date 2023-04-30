import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { DialogRegisterFailModule } from '../dialog/dialog-register-fail/dialog-register-fail.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DialogRegisterFailModule,
    RouterModule.forChild([
        {
            path: '',
            component: RegisterComponent
        }
    ])
  ],
})
export class RegisterModule { }
