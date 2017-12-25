//Import from '@angular/core' the module Pipe and PipeTransform
import { Pipe, PipeTransform } from '@angular/core';
//import _ from 'lodash';

//Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
	name: 'orderby'
})
export class OrderByPipe implements PipeTransform {
	transform(arr: any[], orderBy: string) {
		if (!arr || !orderBy) {
			return arr;
		}
		
		//return _.orderBy(arr, orderBy);
		return arr.sort(function(a, b){
			console.log(a.id, b.id);
			let v1 = isNaN(a[orderBy]) ? a[orderBy] : +a[orderBy];
			let v2 = isNaN(b[orderBy]) ? b[orderBy] : +b[orderBy];
			return v1 < v2 ? -1 : v1 > v2 ? 1 : 0
		});
	}
}
