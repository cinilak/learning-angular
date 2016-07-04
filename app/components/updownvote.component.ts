import {Component, Input} from 'angular2/core';

@Component ({
    selector: 'updownvote',
    template:`
    <br>
    <i class="glyphicon glyphicon-chevron-up" (click)="upVote()" [class.higlighted]="upvote"></i>
    <br>
    <span>{{ numberOfLikes }}</span>
    <br>
    <i class="glyphicon glyphicon-chevron-down" (click)="downVote()" [class.higlighted]="downvote"></i>
    `,
	styles: [`
		.glyphicon-chevron-up, .glyphicon-chevron-down{
			cursor:pointer;
			color: #ccc;
		}
		.higlighted{
			color: orange;
		}
	`]    
})

export class UpdownvoteComponent {
    @Input() numberOfLikes = 0;
    @Input() upvote = false;
    @Input() downvote = false;
    
    upVote(){
        if(this.upvote)
        {
            this.upvote = false;
            this.numberOfLikes--;            
        }
        else if (!this.upvote && this.downvote)
        {
            this.downvote = false;
            this.upvote = true;             
            this.numberOfLikes += 2;               
        }        
        else
        {
            this.upvote = true;
            this.downvote = false;                 
            this.numberOfLikes++;            
        }    
    }    
    
    downVote(){
        if(this.downvote)
        {
            this.downvote = false;
            this.numberOfLikes++;
        }
        else if (!this.downvote && this.upvote)
        {
            this.downvote = true;
            this.upvote = false;             
            this.numberOfLikes -= 2;               
        }
        else
        {
            this.downvote = true;
            this.upvote = false;             
            this.numberOfLikes--;            
        }
    }
}