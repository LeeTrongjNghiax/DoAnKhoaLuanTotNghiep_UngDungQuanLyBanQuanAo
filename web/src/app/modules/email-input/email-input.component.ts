import { Component } from '@angular/core';
import { TTextFieldComponent } from '../../shared/components/t-text-field/t-text-field.component';
import { TButtonComponent } from '../../shared/components/t-button/t-button.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [CommonModule, TTextFieldComponent, TButtonComponent],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss'
})
export class EmailInputComponent {
  public email: string = '';
  public emailRegex = /^[\w-\.]+@gmail.com$/;

  public constructor(private router: Router) {}

  public onChangeEmail(e: string) {
    this.email = e;
  }

  public onValidateEmail() {
    if (this.emailRegex.test(this.email))
      return true;
    else
      return false;
  }

  public onClick() {
    if (this.onValidateEmail()) {
      this.router.navigate(
        [`/otp-input`, { email: this.email }], 
      );
    }
  }
}
