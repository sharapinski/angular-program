//Import from '@angular/core' the module Pipe and PipeTransform
import { Injectable, Pipe, PipeTransform } from '@angular/core';

//Tell Angular2 we're creating a Pipe with TypeScript decorators
@Injectable()
@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	transform(arr: any[], search: string) {
		if (!arr || !search)
		{
			return arr
		}
		return arr.filter((item) => (item.title||'').toUpperCase().indexOf(search.toUpperCase())> -1);;
	}
}
