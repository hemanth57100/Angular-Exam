import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adj',
  standalone: true
})
export class AdjPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,3);
  }

}
