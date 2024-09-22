import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { UserService } from '../../core/services/user.service';
import { IUserSendOtpParams } from '../../../interfaces/api/parameters/user-send-otp-params';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUserForgotPasswordService } from '../../core/services/form-user-forgot-password.service';
import { Subject, takeUntil } from 'rxjs';
import { IUserSendOtpResponse } from '../../../interfaces/api/response/user-send-otp-response';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [
    CommonModule, 
    TTextFieldComponent, 
    TButtonComponent, 
    ReactiveFormsModule, 
  ],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss'
})
export class EmailInputComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;
  public isError: boolean = false;
  public errorMessage: string = '';

  public onClick() {
    this.isFormSubmited = true;

    const params: IUserSendOtpParams = {
      email: this.formUserForgotPassword.form.value.email || ''
    }

    this.userService.sendOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserSendOtpResponse) => this.onSendOtpSuccess(response), 
        (response: IUserSendOtpResponse) => this.onSendOtpFail(response), 
      );
  }

  private onSendOtpSuccess(res: IUserSendOtpResponse) {
    console.log(res.mess);

    if (res.mess === '') {
      this.router.navigate(
        [`/otp-input-to-reset-password`, { 
          email: this.formUserForgotPassword.form.value.email 
        }], 
      );
    } else {
      this.isError = true;
      this.errorMessage = res.mess;
    }
  }

  private onSendOtpFail(res: IUserSendOtpResponse) {
    console.log(res);
  }

  public constructor(
    private router: Router, 
    private userService: UserService, 
    public formUserForgotPassword: FormUserForgotPasswordService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
