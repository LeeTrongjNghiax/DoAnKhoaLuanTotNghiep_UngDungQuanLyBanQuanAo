import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormOtpForgotPasswordOtpService } from './services/form-otp-forgot-password-otp.service';
import { FormOtpForgotPasswordService } from '../email-input/services/form-otp-forgot-password.service';
import { IUserValidOtpParams } from '../../core/interfaces/api/parameters/user-valid-otp-params';
import { IUserValidOtpResponse } from '../../core/interfaces/api/response/user-valid-otp-response';
import { OtpService } from '../../core/services/otp.service';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { HttpResponse } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-otp-input-to-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, TTextFieldComponent, TButtonComponent, NgIf],
  templateUrl: './otp-input-to-reset-password.component.html',
  styleUrl: './otp-input-to-reset-password.component.scss'
})
export class OtpInputToResetPasswordComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isLoading: boolean = false;
  public errorMessage: string = "";

  public onSendOtp() {
    this.isLoading = true;
    this.errorMessage = "";

    if (!this.formOtpForgotPasswordOtpService.form.valid) {
      this.formOtpForgotPasswordOtpService.form.markAllAsTouched();
      return;
    }

    const params: IUserValidOtpParams = {
      email: this.formOtpForgotPasswordService.form.value.email || '', 
      otp: this.formOtpForgotPasswordOtpService.form.value.otp || '', 
    }

    this.otpService.validOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserValidOtpResponse>) => 
          this.onSendOtpSuccess(response), 
        (response: HttpResponse<IUserValidOtpResponse>) => 
          this.onSendOtpFail(response), 
      )
  }

  private onSendOtpSuccess(res: HttpResponse<IUserValidOtpResponse>) {
    this.isLoading = false;

    if (res.body?.mess === "Account Not Found") {
      this.errorMessage = "Email để xác nhận OTP không tồn tại";
    } else if (res.body?.mess === "OTP Expired") {
      this.errorMessage = "OTP đã hết hạn. Vui lòng thử lại";
    } else if (res.body?.mess === "OTP Invalid") {
      this.errorMessage = "OTP không đúng";
    } else if (res.body?.mess === "OTP Valid") {
      this.route.navigate(['forgot-password-input']);
    }
    
  }

  private onSendOtpFail(res: HttpResponse<IUserValidOtpResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
    console.log(res);
  }

  public constructor(
    private route: Router, 
    private otpService: OtpService, 
    public formOtpForgotPasswordService: FormOtpForgotPasswordService, 
    public formOtpForgotPasswordOtpService: FormOtpForgotPasswordOtpService
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
