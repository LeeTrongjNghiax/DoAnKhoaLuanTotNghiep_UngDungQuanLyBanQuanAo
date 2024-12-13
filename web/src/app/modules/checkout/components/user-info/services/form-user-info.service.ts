import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUserInfoService {
  readonly form = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Z][a-z]*( [A-Z][a-z])+$/gi)
    ]), 
    phone: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^0\d{9}$/gi)
    ]), 
    address: new FormControl('', [
      Validators.required, 
    ]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
