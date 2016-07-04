import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {PostsComponent} from './posts.component';
import {FavouritedComponent} from './favourited.component';
import {LikeComponent} from './like.component';
import {UpdownvoteComponent} from './updownvote.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from '../services/tweet.service';
import {PostsService} from '../services/posts.service';
import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {ChangePaswordFormComponent} from './change-password.component';

@Component({
    selector: 'my-app',
    template: 
        `        
        <change-password></change-password>
        <courses></courses>
        <authors></authors>
        <favourited [isFavourite]="post.isFavourite" (change)="onFavouritedChange($event)"></favourited>
        <like [isLiked]="post.isLiked" [numberOfLikes]="post.numberOfLikes"></like>
        <updownvote [upvote]="post.upvote" [downvote]="post.downvote" [numberOfLikes]="post.numberOfLikes"></updownvote>
        <tweet [tweets]="tweets"></tweet>
        <posts title="Who can see my stuff?">
            Content of who can see my stuff
        </posts>
        <posts title="Who can contact me?">
            Content of who can contact me
        </posts> 
        <contact-form></contact-form>
        <signup-form></signup-form>
        `,
	directives: [ChangePaswordFormComponent, SignUpFormComponent, ContactFormComponent, PostsComponent, CoursesComponent, AuthorsComponent, FavouritedComponent, LikeComponent, UpdownvoteComponent, TweetComponent],
    providers: [TweetService, PostsService]
})
export class AppComponent { 
    post = {
        title: "Title",
        isFavourite: true,
        isLiked: false,
        numberOfLikes: 10,
        upvote: true,
        downvote: false
    }
    
    onFavouritedChange($event){
        console.log($event);
    }
    
    tweets: any[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }        
}
