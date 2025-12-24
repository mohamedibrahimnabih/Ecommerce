import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {

    const newValue =  value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');

    return newValue;
  }

}
