import {Component} from "angular2/core";
import {AuthorsService} from '../services/authors.service';

@Component({
    selector: "authors",
	templateUrl: "../app/templates/authors.template.html",
	providers: [AuthorsService]
})
export class AuthorsComponent {
	title = "Authors title";
	authors: string[];
	
	constructor(authorsService: AuthorsService){
		this.authors = authorsService.getAuthors();
	}
}
