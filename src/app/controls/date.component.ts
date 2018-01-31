import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import { TimePipe } from '../shared/time.pipe';

const CUSTOM_RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true
};

@Component({
   selector: 'date',
   template: `
       <input type="text" [value]="date | date:'dd/MM/yyyy'" placeholder="DD/MM/YYYY" pattern="\d{1,2}\/\d{1,2}\/\d{4}">`,
   providers: [CUSTOM_RADIO_VALUE_ACCESSOR]
})
export class DateComponent implements ControlValueAccessor {
    @Input() date: Date;

    setValue(item) {
        this.value = item.target.value;
    }

    set value(newValue) {
        if (newValue) {
            this.date = newValue;
            this.onChange(newValue);
        }
    }

    get value() {
        return this.date;
    }

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    writeValue(value: any) {
        if (value !== this.date) {
            this.date = value;
        }
    }
}
