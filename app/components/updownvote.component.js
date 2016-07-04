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
    var UpdownvoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UpdownvoteComponent = (function () {
                function UpdownvoteComponent() {
                    this.numberOfLikes = 0;
                    this.upvote = false;
                    this.downvote = false;
                }
                UpdownvoteComponent.prototype.upVote = function () {
                    if (this.upvote) {
                        this.upvote = false;
                        this.numberOfLikes--;
                    }
                    else if (!this.upvote && this.downvote) {
                        this.downvote = false;
                        this.upvote = true;
                        this.numberOfLikes += 2;
                    }
                    else {
                        this.upvote = true;
                        this.downvote = false;
                        this.numberOfLikes++;
                    }
                };
                UpdownvoteComponent.prototype.downVote = function () {
                    if (this.downvote) {
                        this.downvote = false;
                        this.numberOfLikes++;
                    }
                    else if (!this.downvote && this.upvote) {
                        this.downvote = true;
                        this.upvote = false;
                        this.numberOfLikes -= 2;
                    }
                    else {
                        this.downvote = true;
                        this.upvote = false;
                        this.numberOfLikes--;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UpdownvoteComponent.prototype, "numberOfLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UpdownvoteComponent.prototype, "upvote", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], UpdownvoteComponent.prototype, "downvote", void 0);
                UpdownvoteComponent = __decorate([
                    core_1.Component({
                        selector: 'updownvote',
                        template: "\n    <br>\n    <i class=\"glyphicon glyphicon-chevron-up\" (click)=\"upVote()\" [class.higlighted]=\"upvote\"></i>\n    <br>\n    <span>{{ numberOfLikes }}</span>\n    <br>\n    <i class=\"glyphicon glyphicon-chevron-down\" (click)=\"downVote()\" [class.higlighted]=\"downvote\"></i>\n    ",
                        styles: ["\n\t\t.glyphicon-chevron-up, .glyphicon-chevron-down{\n\t\t\tcursor:pointer;\n\t\t\tcolor: #ccc;\n\t\t}\n\t\t.higlighted{\n\t\t\tcolor: orange;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UpdownvoteComponent);
                return UpdownvoteComponent;
            }());
            exports_1("UpdownvoteComponent", UpdownvoteComponent);
        }
    }
});
//# sourceMappingURL=updownvote.component.js.map