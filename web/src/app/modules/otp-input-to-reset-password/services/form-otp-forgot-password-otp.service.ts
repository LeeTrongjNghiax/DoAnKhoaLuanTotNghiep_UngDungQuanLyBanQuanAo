import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormOtpForgotPasswordOtpService {
  readonly form = new FormGroup({
    otp: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^\d{6}$/gi)
    ]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
