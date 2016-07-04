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
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent() {
                    this.isExpanded = false;
                }
                PostsComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PostsComponent.prototype, "title", void 0);
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        styles: ["\n        .posts {\n            border: 1px solid #ccc;\n            border-radius: 2px;\n        }\n        \n        .posts .posts-title {\n            padding: 20px;\n            font-weight: bold;\n        }\n        \n        .posts .posts-title:hover{\n            background: #f0f0f0;\n            cursor: pointer;\n        }\n        \n        .posts .posts-content {\n            padding: 20px;\n        }\n    "],
                        template: "\n    <div class=\"posts\">\n        <div \n            class=\"posts-title\"\n            (click)=\"toggle()\">\n            {{ title }} \n            <i \n                class=\"pull-right glyphicon\" \n                [ngClass]=\"\n                    { \n                        'glyphicon-chevron-down': !isExpanded, \n                        'glyphicon-chevron-up': isExpanded \n                    }\">\n            </i>\n        </div>\n        <div *ngIf=\"isExpanded\" class=\"posts-content\">\n            <ng-content></ng-content> \n        </div>\n    </div>    \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map