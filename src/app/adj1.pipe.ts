import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adj1',
  standalone: true
})
export class Adj1Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,2);
  }

}
