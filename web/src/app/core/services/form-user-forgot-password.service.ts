import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUserForgotPasswordService {
  readonly form = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z][A-Za-z0-9]*@gmail.com$/gi)
    ]), 
    otp: new FormControl('', [
      Validators.required, 
    ]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
