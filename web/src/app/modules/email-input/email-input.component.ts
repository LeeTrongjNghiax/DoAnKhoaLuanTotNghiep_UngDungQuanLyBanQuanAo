import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { UserService } from '../../core/services/user.service';
import { IUserSendOtpParams } from '../../../interfaces/api/parameters/user-send-otp-params';

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

  public constructor(private router: Router, private userService: UserService) {}

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
    const params: IUserSendOtpParams = {
      email: this.email
    }

    this.userService.sendOtp(params)
      // .pipe(takeUntil(this.destroy))
      .subscribe(
        (response) => console.log(response), 
        (response) => console.log(response), 
      );

    if (this.onValidateEmail()) {
      this.router.navigate(
        [`/otp-input`, { email: this.email }], 
      );
    }
  }
}
