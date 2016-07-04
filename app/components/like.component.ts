import {Component, Input} from 'angular2/core';

@Component({
	selector: "like",
	template: `
		<i 
		class="glyphicon glyphicon-heart" 
		[class.higlighted]="isLiked"
		(click)="onClick()">
		</i>
		<span>{{ numberOfLikes }}</span>
	`,
	styles: [`
		.glyphicon-heart{
			cursor:pointer;
			color: #ccc;
		}
		.higlighted{
			color: deeppink;
		}
	`]
})

export class LikeComponent {
	@Input() numberOfLikes = 0;
	@Input() isLiked = false;		
	
	onClick(){
		this.isLiked = !this.isLiked;
		this.numberOfLikes += this.isLiked ? 1 : -1;
	}

}