import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormOtpForgotPasswordService {
  readonly form = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^.*@gmail.com$/gi)
    ]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
