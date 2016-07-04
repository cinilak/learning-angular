System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.shouldBeUnique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "asd") {
                                resolve({ shouldBeUnique: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                PasswordValidator.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0) {
                        return { cannotContainSpace: true };
                    }
                    else {
                        return null;
                    }
                };
                PasswordValidator.shouldBeValid = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value != "asd") {
                                resolve({ shouldBeValid: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                PasswordValidator.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmNewPassword = group.find('confirmNewPassword').value;
                    if (newPassword == '' || confirmNewPassword == '') {
                        return null;
                    }
                    if (newPassword != confirmNewPassword) {
                        return { passwordsShouldMatch: true };
                    }
                    else {
                        return null;
                    }
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=passwordValidator.js.map