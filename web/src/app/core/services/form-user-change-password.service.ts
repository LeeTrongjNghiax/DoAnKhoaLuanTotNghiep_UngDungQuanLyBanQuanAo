import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUserChangePasswordService {
  readonly form = new FormGroup({
    password: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z0-9]{8,}$/gi)
    ]), 
    confirmPassword: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[A-Za-z0-9]{8,}$/gi)
    ]), 
  })

  public clearForm() {
    this.form.reset();
  }

  constructor() { }
}
