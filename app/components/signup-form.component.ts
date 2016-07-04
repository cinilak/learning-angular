import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from '../lib/usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: '../app/templates/signup-form.template.html'
})
export class SignUpFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        })
    } 

    signup(){
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        console.log(this.form.value);
    }
}