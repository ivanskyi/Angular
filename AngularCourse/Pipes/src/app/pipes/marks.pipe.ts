import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marks'
})
export class MarksPipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()}!!!`;
  }
}
