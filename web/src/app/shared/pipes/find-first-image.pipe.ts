import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findFirstImage',
  standalone: true
})
export class FindFirstImagePipe implements PipeTransform {

  transform(value: string): string | undefined {
    return value.match(/(?<=src=").+(?=")/)![0];
  }

}
