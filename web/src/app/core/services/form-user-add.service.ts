import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUserAddService {
  readonly form = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z][A-Za-z0-9 ]*$/gi)
    ]), 
    password: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z0-9]{8,}$/gi)
    ]), 
    confirmPassword: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z0-9]{8,}$/gi)
    ]), 
    phone: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^0\d{9}$/gi)
    ]), 
    email: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z][A-Za-z0-9]*@gmail.com$/gi)
    ]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
