import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormOtpForgotPasswordService } from './services/form-otp-forgot-password.service';
import { IUserSendOtpParams } from '../../core/interfaces/api/parameters/user-send-otp-params';
import { IUserSendOtpResponse } from '../../core/interfaces/api/response/user-send-otp-response';
import { OtpService } from '../../core/services/otp.service';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    TTextFieldComponent, 
    TButtonComponent, 
  ],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss'
})
export class EmailInputComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;
  public isLoading: boolean = false;
  public errorMessage: string = '';

  public onClick() {
    this.isLoading = true;
    this.isFormSubmited = true;
    this.errorMessage = '';

    if (!this.formOtpForgotPasswordService.form.valid) {
      this.formOtpForgotPasswordService.form.markAllAsTouched();
      return;
    }

    const params: IUserSendOtpParams = {
      email: this.formOtpForgotPasswordService.form.value.email || ''
    }

    this.otpService.sendOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserSendOtpResponse>) => 
          this.onSendOtpSuccess(response), 
        (response: HttpResponse<IUserSendOtpResponse>) => 
          this.onSendOtpFail(response), 
      );
  }

  private onSendOtpSuccess(res: HttpResponse<IUserSendOtpResponse>) {
    this.isLoading = false;

    if (res.body?.mess === "Send OTP Success") {
      this.router.navigate(
        [`/otp-input-to-reset-password`, { 
          email: this.formOtpForgotPasswordService.form.value.email 
        }], 
      );
    } else if (res.body?.mess === "Account Not Found") {
      this.errorMessage = "Không tìm thấy tài khoản với email này";
    }
  }

  private onSendOtpFail(res: HttpResponse<IUserSendOtpResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
  }

  public constructor(
    private router: Router, 
    private otpService: OtpService, 
    public formOtpForgotPasswordService: FormOtpForgotPasswordService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
