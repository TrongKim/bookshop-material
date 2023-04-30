import { Injectable } from "@angular/core";
import { IAccountOnServer } from "../model/login/login.model";

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    private listAccountOnServer: IAccountOnServer[] = [
        {
            id: 'fdsafsadf432',
            username: 'Nguyen Duc Ha',
            password: 'adminadmin',
            permissions: 'normal',
            email: 'adfdsa@gmail.com'
        },
        {
            id: 'fdsafs4332',
            username: 'Nguyen Huu Da',
            password: 'admin3',
            permissions: 'normal',
            email: 'kehuydiet@gmail.com'
        },
        {
            id: '234fdsaffdsa',
            username: 'Nguyen Trong Kim',
            password: 'matkhau',
            permissions: 'admin',
            email: 'kipmap123@gmail.com'
        },
    ];
    
    constructor() {}

    addUser(account: IAccountOnServer): void {
        this.listAccountOnServer.push(account);
    }

    getUsers(): IAccountOnServer[] {
        return this.listAccountOnServer;
    }
    
}