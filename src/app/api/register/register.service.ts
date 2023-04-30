import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IAccountClient, IAccountOnServer } from "src/app/model/login/login.model";
import { IDataRegister } from "src/app/model/register/register.model";
import { UserDataService } from "../user-data.service";

@Injectable({
    providedIn: 'root'
})
export class APIRegisterService {
    constructor(protected userDataService: UserDataService) {}

    register(dataRegister: IDataRegister): Observable<IAccountClient | null> {
        for(let user of this.userDataService.getUsers()) {
            if(user.email === dataRegister.email) return of(null);
        }
        const dataRegisterGenByServer: IAccountOnServer = {
            email: dataRegister.email,
            id: 'genrandom' + new Date().getTime(),
            password: dataRegister.password,
            permissions: 'normal',
            username: dataRegister.username
        };
        this.userDataService.addUser(dataRegisterGenByServer);

        return of({
            email: dataRegisterGenByServer.email,
            id: dataRegisterGenByServer.id,
            permissions: dataRegisterGenByServer.permissions,
            username: dataRegisterGenByServer.username
        });
    }
}