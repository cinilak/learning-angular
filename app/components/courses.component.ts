import {Component} from "angular2/core";
import {CoursesService} from '../services/courses.service';
import {AutoGrowDirective} from '../directives/auto-grow.directive';

@Component({
    selector: "courses",
	templateUrl: "../app/templates/courses.template.html",
	providers: [CoursesService],
	directives: [AutoGrowDirective]
})
export class CoursesComponent {
	title = "Courses title";
	courses;
	
	constructor(coursesService: CoursesService){
		this.courses = coursesService.getCourses();
	}
}
