//Import from '@angular/core' the module Pipe and PipeTransform
import { Pipe, PipeTransform } from '@angular/core';

//Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
	name: 'orderby'
})
export class OrderByPipe implements PipeTransform {
	transform(courses: any[], orderBy: string) {
		if (!courses || !orderBy)
		{
			return courses
		}
		return courses.sort(function(a, b){
			let v1 = isNaN(a[orderBy]) ? a[orderBy] : +a[orderBy];
			let v2 = isNaN(b[orderBy]) ? b[orderBy] : +b[orderBy];
			return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
		});
	}
}
