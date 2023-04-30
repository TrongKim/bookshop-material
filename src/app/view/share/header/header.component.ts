import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cookieEnums } from 'src/app/enum/cookie.enum';
import { IAccountClient } from 'src/app/model/login/login.model';
import { CookieUtils } from 'src/app/util/cookie.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titlePage: string = 'None Title Here';
  @Input() descriptionPage: string = 'Not have any description here'

  isShowCartPopup: boolean = false;
  isActiveMenuResponsive: boolean = false;

  userData: IAccountClient | null = null;

  constructor(protected router: Router) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userData = JSON.parse(CookieUtils.getCookie(cookieEnums.USER_DATA)) as IAccountClient;
  }

  //========================DOM EVENT FUNCTION========================

  clickEventLogout(): void {
    CookieUtils.removeCookie(cookieEnums.USER_DATA);
    this.router.navigate(['/login']);
  }

  clickEventActiveMenuResponsive(): void {
    this.isActiveMenuResponsive = true;
  }

  clickEventCloseMenuResponsive(): void {
    this.isActiveMenuResponsive = false;
  }

  clickEventShowCartPopup(): void {
    this.isShowCartPopup = true;
  }

  clickEventCloseCartPopup(): void {
    this.isShowCartPopup = false;
  }

}
