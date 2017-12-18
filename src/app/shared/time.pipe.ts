import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'time'
})
export class TimePipe implements PipeTransform {
	transform(duration: number) {

    let hours = (duration - duration % 60) / 60;
    let mins = duration % 60;
    let formattedTime = (hours ? hours + ' h ': '') + mins + ' min';

		return formattedTime;
	}
}
