import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFormatter'
})
export class StatusFormatterPipe implements PipeTransform {

  transform(value) {
    switch (value) {
      case 'Waiting':
        return String.fromCharCode(61738);
      // return '&#xf12a;';
      case 'InProgress':
        return String.fromCharCode(61463);
      // return '&#xf017;';
      case 'Done':
        return String.fromCharCode(61452);
      // return '&#xf00c;';
      default:
        return String.fromCharCode(61736);
      // return '&#xf128;';
    }
  }

}
