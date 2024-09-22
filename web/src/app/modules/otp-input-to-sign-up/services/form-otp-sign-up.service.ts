import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormOtpSignUpService {
  readonly form = new FormGroup({
    otp: new FormControl('', [Validators.required]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
