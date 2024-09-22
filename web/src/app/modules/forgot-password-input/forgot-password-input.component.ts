import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormUserForgotPasswordService } from './services/form-user-forgot-password.service';
import { FormOtpForgotPasswordService } from '../email-input/services/form-otp-forgot-password.service';
import { IUserChangePasswordParams } from '../../core/interfaces/api/parameters/user-change-password-params';
import { IUserChangePasswordResponse } from '../../core/interfaces/api/response/user-change-password-response';
import { UserService } from '../../core/services/user.service';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password-input',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    TButtonComponent, 
    TTextFieldComponent, 
  ],
  templateUrl: './forgot-password-input.component.html',
  styleUrl: './forgot-password-input.component.scss'
})
export class ForgotPasswordInputComponent {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;

  public onChangePassword() {
    this.isFormSubmited = true;

    if (!this.formUserForgotPasswordService.form.valid) {
      this.formUserForgotPasswordService.form.markAllAsTouched();
      return;
    }

    const params: IUserChangePasswordParams = {
      email: this.formOtpForgotPasswordService.form.value.email || '', 
      password: this.formUserForgotPasswordService.form.value.password || '', 
    }

    this.userService.forgetPassword(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserChangePasswordResponse>) => 
          this.onChangePasswordSuccess(response), 
        (response: HttpResponse<IUserChangePasswordResponse>) => 
          this.onChangePasswordFail(response), 
      );
  }

  private onChangePasswordSuccess(res: HttpResponse<IUserChangePasswordResponse>) {
    console.log(res);
    this.route.navigate(['']);
  }

  private onChangePasswordFail(res: HttpResponse<IUserChangePasswordResponse>) {
    console.log(res);
  }

  public constructor (
    private route: Router, 
    private userService: UserService, 
    private formOtpForgotPasswordService: FormOtpForgotPasswordService, 
    public formUserForgotPasswordService: FormUserForgotPasswordService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
