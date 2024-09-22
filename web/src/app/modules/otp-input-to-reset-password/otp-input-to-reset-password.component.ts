import { Component, OnDestroy, OnInit } from '@angular/core';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { Subject, takeUntil } from 'rxjs';
import { IUserValidOtpParams } from '../../../interfaces/api/parameters/user-valid-otp-params';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { FormUserForgotPasswordService } from '../../core/services/form-user-forgot-password.service';
import { IUserValidOtpResponse } from '../../../interfaces/api/response/user-valid-otp-response';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-input-to-reset-password',
  standalone: true,
  imports: [TTextFieldComponent, TButtonComponent, ReactiveFormsModule],
  templateUrl: './otp-input-to-reset-password.component.html',
  styleUrl: './otp-input-to-reset-password.component.scss'
})
export class OtpInputToResetPasswordComponent implements OnInit, OnDestroy {
  public destroy = new Subject<void>();
  public email: string | null = '';

  public onSendOtp() {
    const params: IUserValidOtpParams = {
      email: this.formUserForgotPassword.form.value.email || '', 
      otp: this.formUserForgotPassword.form.value.otp || '', 
    }

    this.userService.validOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserValidOtpResponse) => this.onSendOtpSuccess(response), 
        (response: IUserValidOtpResponse) => this.onSendOtpFail(response), 
      )
  }

  private onSendOtpSuccess(res: IUserValidOtpResponse) {
    console.log(res);

    if (res.mess)

    this.route.navigate(['forgot-password-input']);
  }

  private onSendOtpFail(res: IUserValidOtpResponse) {
    console.log(res);
  }

  public constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private userService: UserService, 
    public formUserForgotPassword: FormUserForgotPasswordService
  ) {}

  public ngOnInit(): void {
    this.email = this.activeRoute.snapshot.paramMap.get("email");
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
