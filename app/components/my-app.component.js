System.register(['angular2/core', './courses.component', './authors.component', './posts.component', './favourited.component', './like.component', './updownvote.component', './tweet.component', '../services/tweet.service', '../services/posts.service', './contact-form.component', './signup-form.component', './change-password.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, posts_component_1, favourited_component_1, like_component_1, updownvote_component_1, tweet_component_1, tweet_service_1, posts_service_1, contact_form_component_1, signup_form_component_1, change_password_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (favourited_component_1_1) {
                favourited_component_1 = favourited_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (updownvote_component_1_1) {
                updownvote_component_1 = updownvote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.post = {
                        title: "Title",
                        isFavourite: true,
                        isLiked: false,
                        numberOfLikes: 10,
                        upvote: true,
                        downvote: false
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavouritedChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "        \n        <change-password></change-password>\n        <courses></courses>\n        <authors></authors>\n        <favourited [isFavourite]=\"post.isFavourite\" (change)=\"onFavouritedChange($event)\"></favourited>\n        <like [isLiked]=\"post.isLiked\" [numberOfLikes]=\"post.numberOfLikes\"></like>\n        <updownvote [upvote]=\"post.upvote\" [downvote]=\"post.downvote\" [numberOfLikes]=\"post.numberOfLikes\"></updownvote>\n        <tweet [tweets]=\"tweets\"></tweet>\n        <posts title=\"Who can see my stuff?\">\n            Content of who can see my stuff\n        </posts>\n        <posts title=\"Who can contact me?\">\n            Content of who can contact me\n        </posts> \n        <contact-form></contact-form>\n        <signup-form></signup-form>\n        ",
                        directives: [change_password_component_1.ChangePaswordFormComponent, signup_form_component_1.SignUpFormComponent, contact_form_component_1.ContactFormComponent, posts_component_1.PostsComponent, courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favourited_component_1.FavouritedComponent, like_component_1.LikeComponent, updownvote_component_1.UpdownvoteComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService, posts_service_1.PostsService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=my-app.component.js.map