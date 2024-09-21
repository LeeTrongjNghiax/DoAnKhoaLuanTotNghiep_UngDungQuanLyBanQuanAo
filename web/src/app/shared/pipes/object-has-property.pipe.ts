import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'objectHasProperty',
  standalone: true
})
export class ObjectHasPropertyPipe implements PipeTransform {

  transform(object: ValidationErrors | null, property: string): boolean {
    if (object !== null)
      return object.hasOwnProperty(property)
    else
      return false
  }

}
