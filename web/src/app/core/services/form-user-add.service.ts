import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUserAddService {
  readonly form = new FormGroup({
    username: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
