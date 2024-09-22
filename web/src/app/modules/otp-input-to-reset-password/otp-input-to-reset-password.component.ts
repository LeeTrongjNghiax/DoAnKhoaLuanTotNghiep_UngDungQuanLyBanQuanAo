import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormOtpForgotPasswordOtpService } from './services/form-otp-forgot-password-otp.service';
import { FormOtpForgotPasswordService } from '../email-input/services/form-otp-forgot-password.service';
import { IUserValidOtpParams } from '../../core/interfaces/api/parameters/user-valid-otp-params';
import { IUserValidOtpResponse } from '../../core/interfaces/api/response/user-valid-otp-response';
import { OtpService } from '../../core/services/otp.service';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-otp-input-to-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, TTextFieldComponent, TButtonComponent, ],
  templateUrl: './otp-input-to-reset-password.component.html',
  styleUrl: './otp-input-to-reset-password.component.scss'
})
export class OtpInputToResetPasswordComponent implements OnInit, OnDestroy {
  public destroy = new Subject<void>();
  public email: string | null = '';
  public isFormSubmited: boolean = false;

  public onSendOtp() {
    this.isFormSubmited = true;

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
    console.log(res);
    this.route.navigate(['forgot-password-input']);
  }

  private onSendOtpFail(res: HttpResponse<IUserValidOtpResponse>) {
    console.log(res);
  }

  public constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private otpService: OtpService, 
    private formOtpForgotPasswordService: FormOtpForgotPasswordService, 
    public formOtpForgotPasswordOtpService: FormOtpForgotPasswordOtpService
  ) {}

  public ngOnInit(): void {
    this.email = this.activeRoute.snapshot.paramMap.get("email");
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
