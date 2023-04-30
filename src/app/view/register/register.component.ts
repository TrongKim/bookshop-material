import { Component, OnInit } from '@angular/core';
import { cookieEnums } from 'src/app/enum/cookie.enum';
import { CookieUtils } from 'src/app/util/cookie.utils';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { DialogRegisterFailComponent } from '../dialog/dialog-register-fail/dialog-register-fail.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  
  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(3)]),
    username: new FormControl('', [Validators.required, Validators.min(6)]),
  });

  isWaitingResponse: boolean = false;

  hide: boolean = true;
  hideConfirmPassword: boolean = true;

  get emailInput() { return this.signUpForm.get('email'); }
  get passwordInput() { return this.signUpForm.get('password'); }
  get confirmPasswordInput() { return this.signUpForm.get('confirmPassword'); }
  get usernameInput() { return this.signUpForm.get('username'); }

  protected subs = new SubSink();
  
  constructor(protected registerService: RegisterService, protected router: Router, protected dialog: MatDialog) { }

  ngOnInit(): void {
    this.onRegister();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openDialog(message: string): void {
    this.dialog.open(DialogRegisterFailComponent, {
      data: { email: this.emailInput?.value, message: message },
    });
  }

  //=============================OBSERVABLE FUNCTION=============================

  onRegister(): void {
    this.subs.add(this.registerService.registerData$.subscribe(dataRegister => {
      this.isWaitingResponse = false;
      if(!dataRegister) {
        this.openDialog('Đăng ký thất bại email đã tồn tại');
        return;
      }
      CookieUtils.setCookieObject(cookieEnums.USER_DATA, dataRegister, new Date(11,11, 9999).toUTCString());
      this.router.navigate(['home']);
    }));
  }

  //============================DOM EVENT FUNCTION===============================

  clickEventRegister(): void {
    this.isWaitingResponse = true;
    const stateRegister = this.registerService.register({
      email: this.emailInput?.value,
      password: this.passwordInput?.value,
      username: this.usernameInput?.value
    }, this.confirmPasswordInput?.value);
    if(stateRegister === 'fail data') {
      this.openDialog('Hãy kiểm tra lại các thông tin của bạn');
      this.isWaitingResponse = false;
    } else if (stateRegister === 'fail confirm password') {
      this.openDialog('Mật khẩu và xác nhận mật khẩu không khớp');
      this.isWaitingResponse = false;
    }
  }
}
