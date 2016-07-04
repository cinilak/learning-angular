System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FavouritedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavouritedComponent = (function () {
                function FavouritedComponent() {
                    this.isFavourite = false;
                    this.change = new core_1.EventEmitter();
                }
                FavouritedComponent.prototype.onClick = function () {
                    this.isFavourite = !this.isFavourite;
                    this.change.emit({ newValue: this.isFavourite });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavouritedComponent.prototype, "isFavourite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavouritedComponent.prototype, "change", void 0);
                FavouritedComponent = __decorate([
                    core_1.Component({
                        selector: "favourited",
                        templateUrl: '../app/templates/favourited.template.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavouritedComponent);
                return FavouritedComponent;
            }());
            exports_1("FavouritedComponent", FavouritedComponent);
        }
    }
});
//# sourceMappingURL=favourited.component.js.map