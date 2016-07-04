System.register(['angular2/core', 'angular2/common', '../lib/passwordValidator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordValidator_1;
    var ChangePaswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidator_1_1) {
                passwordValidator_1 = passwordValidator_1_1;
            }],
        execute: function() {
            ChangePaswordFormComponent = (function () {
                function ChangePaswordFormComponent(fb) {
                    this.form = fb.group({
                        currentPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ]), passwordValidator_1.PasswordValidator.shouldBeValid],
                        newPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                passwordValidator_1.PasswordValidator.cannotContainSpace
                            ])],
                        confirmNewPassword: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                passwordValidator_1.PasswordValidator.cannotContainSpace
                            ])]
                    }, { validator: passwordValidator_1.PasswordValidator.passwordsShouldMatch });
                }
                ChangePaswordFormComponent.prototype.signup = function (form) {
                    console.log(form);
                };
                ChangePaswordFormComponent = __decorate([
                    core_1.Component({
                        selector: 'change-password',
                        templateUrl: '../app/templates/change-password-form.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePaswordFormComponent);
                return ChangePaswordFormComponent;
            }());
            exports_1("ChangePaswordFormComponent", ChangePaswordFormComponent);
        }
    }
});
//# sourceMappingURL=change-password.component.js.map