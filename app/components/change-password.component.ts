import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidator} from '../lib/passwordValidator';

@Component({
    selector: 'change-password',
    templateUrl: '../app/templates/change-password-form.template.html'
})
export class ChangePaswordFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            currentPassword: ['', Validators.compose([
                Validators.required
            ]), PasswordValidator.shouldBeValid],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidator.cannotContainSpace
            ])],
            confirmNewPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidator.cannotContainSpace
            ])]            
        }, { validator: PasswordValidator.passwordsShouldMatch })
    } 

    signup(form){
        console.log(form);
    }
}