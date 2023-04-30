import {NgModule} from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { DialogLoginFailModule } from '../dialog/dialog-login-fail/dialog-login-fail.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    DialogLoginFailModule,
    RouterModule.forChild([
        {
            path: '',
            component: LoginComponent
        }
    ])
  ],
})
export class LoginModule { }
