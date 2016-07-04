System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            username: "Windward",
                            twitterHandle: "@flying",
                            tweetContent: "Lorem Ipsum",
                            numberOfLikes: 3,
                            isLiked: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            username: "Rambo",
                            twitterHandle: "@blabla",
                            tweetContent: "Lorem  Bibsum",
                            numberOfLikes: 1,
                            isLiked: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            username: "Tarzan",
                            twitterHandle: "@fufu",
                            tweetContent: "Lorem flIpsum",
                            numberOfLikes: 3,
                            isLiked: true
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map