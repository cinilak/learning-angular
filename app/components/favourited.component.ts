import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: "favourited",
	templateUrl: '../app/templates/favourited.template.html'
})

export class FavouritedComponent {
	@Input() isFavourite = false;
	
	@Output() change = new EventEmitter();
	
	onClick(){
		this.isFavourite = !this.isFavourite;
		this.change.emit({ newValue: this.isFavourite});
	}

}