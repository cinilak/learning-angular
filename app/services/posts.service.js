System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostsService;
    return {
        setters:[],
        execute: function() {
            PostsService = (function () {
                function PostsService() {
                }
                PostsService.prototype.getCourses = function () {
                    return [
                        {
                            title: "First article title",
                            content: "bla bla bla"
                        },
                        {
                            title: "Second article title",
                            content: "More bla bla bla"
                        },
                        {
                            title: "Third article title",
                            content: "And even more bla bla bla"
                        }
                    ];
                };
                return PostsService;
            }());
            exports_1("PostsService", PostsService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map