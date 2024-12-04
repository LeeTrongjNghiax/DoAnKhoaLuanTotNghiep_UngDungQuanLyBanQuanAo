import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findAbstract',
  standalone: true
})
export class FindAbstractPipe implements PipeTransform {

  transform(value: string, min: number): string | undefined {
    return value.match(`<p>[^\<img].{${min},}</p>`)![0];
  }

}
