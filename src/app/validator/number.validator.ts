import { AbstractControl, ValidatorFn } from "@angular/forms";

export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const pattern = /^[0-9]+$/; // Pattern chỉ cho phép chứa các ký tự số từ 0 đến 9
        const isValid = pattern.test(control.value);
        return isValid ? null : { number: true };
    };
}