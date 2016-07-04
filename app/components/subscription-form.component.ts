import {Component} from 'angular2/core';

@Component({
    selector: 'subscription-form',
    templateUrl: '../app/templates/subscription-form.template.html'
})

export class SubscriptionFormComponent {
    onSubmit(form){
        console.log(form);
    }
}