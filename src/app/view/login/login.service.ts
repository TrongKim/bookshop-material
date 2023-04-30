import { Injectable } from "@angular/core";
import { Subject, take } from "rxjs";
import { APILoginService } from "src/app/api/login/login.service";
import { Undefinable } from "src/app/model/custom-type.model";
import { IAccountClient, IDataLogin } from "src/app/model/login/login.model";

@Injectable()
export class LoginService {
    constructor(protected apiLoginService: APILoginService) {}

    protected readonly $loginData = new Subject<null | IAccountClient>();
    readonly loginData$ = this.$loginData.asObservable();

    login(dataLogin: Undefinable<IDataLogin>): boolean {
        if(!dataLogin.email) return false;
        if(!dataLogin.password) return false;
        this.apiLoginService.login({
            email: dataLogin.email,
            password: dataLogin.password
        }).pipe(take(1)).subscribe(loginData => {
            this.$loginData.next(loginData);
        });
        return true;
    }
    
}