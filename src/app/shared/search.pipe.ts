//Import from '@angular/core' the module Pipe and PipeTransform
import { Pipe, PipeTransform } from '@angular/core';

//Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	transform(courses: any[], search: string) {
		if (!courses || !search)
		{
			return courses
		}
		return courses.filter((item) => (item.title||'').toUpperCase().indexOf(search.toUpperCase())> -1);;
	}
}
