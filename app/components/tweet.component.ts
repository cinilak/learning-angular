import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: "tweet",
    template: `
    <div *ngFor="#tweet of tweets">
        <div class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object" src="{{ tweet.imageUrl }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ tweet.username }} <span class="handle">{{ tweet.twitterHandle }}</span></h4>  
                {{ tweet.tweetContent }}   
                <like [numberOfLikes]="tweet.numberOfLikes" [isLiked]="tweet.isLiked"></like>        
            </div>
        </div>    
    </div>
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],    
    directives: [LikeComponent]
})

export class TweetComponent{
	@Input() tweets;
}