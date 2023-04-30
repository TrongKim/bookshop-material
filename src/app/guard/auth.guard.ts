import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieUtils } from "../util/cookie.utils";
import { cookieEnums } from "../enum/cookie.enum";
import { IAccountClient } from "../model/login/login.model";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {
        const cookieUserData = CookieUtils.getCookie(cookieEnums.USER_DATA);
        if(cookieUserData.length === 0) {
            this.router.navigate(['/login']);
            return false;
        }
        const userData = JSON.parse(cookieUserData) as IAccountClient;

        if(userData?.id === undefined || String(userData.id).length === 0) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}