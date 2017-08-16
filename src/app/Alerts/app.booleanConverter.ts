import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'BooleanConverter'
})
export class BooleanConverter implements PipeTransform {
    transform(value: boolean, format: string, returnFormat: string) {        
        if (format == 'n') {
            return (value == true) ? '1' : '0';
        }
        else if (format == 'b') {
            return (value == true) ? 'Yes' : 'No'
        }
        return;
    }
} 