import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
    public Validate(form: FormGroup, message: any): string[] {
        let vm = new ValidationModel();
        
        for (let control in form.controls) {
            let msg = message[control];
            let ctrl = form.get(control);
            for (let propertyName in ctrl.errors) {
                if (ctrl.errors.hasOwnProperty(propertyName)) {
                    vm.Errors.push(msg[propertyName]);
                }
            }
        }
        return vm.Errors;
    }
}

export class ValidationModel {
    Errors: string[] = [];
}