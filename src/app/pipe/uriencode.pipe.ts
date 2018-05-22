import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'uriencode'})
export class UriEncodePipe implements PipeTransform {

  transform(value: string, fallback: string = '') {
    return value ? encodeURIComponent(value) : fallback;
  }
}
