import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { CookieUtils } from 'src/app/util/cookie.utils';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { cookieEnums } from 'src/app/enum/cookie.enum';
import { DialogLoginFailComponent } from '../dialog/dialog-login-fail/dialog-login-fail.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  
  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)])
  });

  hide = true;

  isWaitingResponse: boolean = false;

  get emailInput() { return this.signInForm.get('email'); }
  get passwordInput() { return this.signInForm.get('password'); }

  protected subs = new SubSink();
  
  constructor(protected loginService: LoginService, protected router: Router, protected dialog: MatDialog) { }

  ngOnInit(): void {
    this.onLogin();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginFailComponent, {
      data: { email: this.emailInput?.value },
    });
    
    this.subs.add(dialogRef.afterClosed().subscribe(state => {
      if(state) this.router.navigate(['forgot-password']);
      
    }));
  }

  //=============================OBSERVABLE FUNCTION=============================

  onLogin(): void {
    this.subs.add(this.loginService.loginData$.subscribe(dataLogin => {
      this.isWaitingResponse = false;
      if(!dataLogin) {
        this.openDialog();
        return;
      }
      CookieUtils.setCookieObject(cookieEnums.USER_DATA, dataLogin, new Date(11,11, 9999).toUTCString());
      this.router.navigate(['home']);
    }));
  }

  //============================DOM EVENT FUNCTION===============================

  clickEventLogin(): void {
    this.isWaitingResponse = true;
    this.loginService.login({
      email: this.emailInput?.value,
      password: this.passwordInput?.value
    });
  }

}
