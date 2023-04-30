import { Injectable } from "@angular/core";
import { Subject, take } from "rxjs";
import { APIRegisterService } from "src/app/api/register/register.service";
import { Undefinable } from "src/app/model/custom-type.model";
import { IAccountClient } from "src/app/model/login/login.model";
import { IDataRegister } from "src/app/model/register/register.model";

@Injectable()
export class RegisterService {
    constructor(protected apiLoginService: APIRegisterService) {}

    protected readonly $registerData = new Subject<null | IAccountClient>();
    readonly registerData$ = this.$registerData.asObservable();

    register(dataRegister: Undefinable<IDataRegister>, confirmPassword?: string): 'fail data' | 'fail confirm password' | 'success' {
        if(!dataRegister.email) return 'fail data';
        if(!dataRegister.password) return 'fail data';
        if(!dataRegister.username) return 'fail data';
        if(!confirmPassword) return 'fail data';
        if(confirmPassword !== dataRegister.password) return 'fail confirm password';
        this.apiLoginService.register({
            email: dataRegister.email,
            password: dataRegister.password,
            username: dataRegister.username
        }).pipe(take(1)).subscribe(registerData => {
            this.$registerData.next(registerData);
        });
        return 'success';
    }
    
}