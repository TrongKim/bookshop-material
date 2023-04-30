export interface IAccountClient {
    id: string;
    username: string;
    permissions: 'normal' | 'admin';
    email: string;
}

export interface IAccountOnServer extends IAccountClient {
    password: string;
}

export interface IDataLogin {
    email: string;
    password: string;
}