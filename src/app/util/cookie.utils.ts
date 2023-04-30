export class CookieUtils {
    constructor() { }

    static removeCookie(name: string): void {
        document.cookie = name + "=;" + new Date(11, 11, 1934).toUTCString() + ";path=/";
    }

    static setCookie(name: string, value: string, dateExpires: string): void {
        document.cookie = name + "=" + value + ";" + dateExpires + ";path=/";
    }

    static setCookieObject(name: string, value: Object, dateExpires: string): void {
        document.cookie = name + "=" + JSON.stringify(value) + ";" + dateExpires + ";path=/";
    }

    static getCookie(nameCookie: string): string {
        let name = nameCookie + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let character of ca) {
            while (character.charAt(0) == ' ') {
                character = character.substring(1);
            }
            if (character.indexOf(name) == 0) {
                return character.substring(name.length, character.length);
            }
        }

        return "";
    }
}