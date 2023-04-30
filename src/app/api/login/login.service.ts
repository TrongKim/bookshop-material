import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IAccountClient, IDataLogin } from "src/app/model/login/login.model";
import { UserDataService } from "../user-data.service";

@Injectable({
    providedIn: 'root'
})
export class APILoginService {
    constructor(protected userDataService: UserDataService) {}

    login(dataLogin: IDataLogin): Observable<IAccountClient | null> {
        for(let user of this.userDataService.getUsers()) {
            if(user.email === dataLogin.email && dataLogin.password === user.password) return of({
                email: user.email,
                id: user.id,
                permissions: user.permissions,
                username: user.username
            });
        }
        return of(null);
    }

}