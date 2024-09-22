import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormUserChangePasswordService } from '../../core/services/form-user-change-password.service';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { IUserChangePasswordParams } from '../../../interfaces/api/parameters/user-change-password-params';
import { FormUserForgotPasswordService } from '../../core/services/form-user-forgot-password.service';
import { IUserChangePasswordResponse } from '../../../interfaces/api/response/user-change-password-response';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-input',
  standalone: true,
  imports: [TTextFieldComponent, TButtonComponent, ReactiveFormsModule],
  templateUrl: './forgot-password-input.component.html',
  styleUrl: './forgot-password-input.component.scss'
})
export class ForgotPasswordInputComponent {
  public destroy = new Subject<void>();
  public isLoginFail: boolean = false;

  public isDisable() {
    return this.formUserChangePassword.form.invalid;
  }

  public onChangePassword() {
    const params: IUserChangePasswordParams = {
      email: this.formUserForgotPassword.form.value.email || '', 
      password: this.formUserChangePassword.form.value.password || '', 
    }

    this.userService.forgetPassword(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserChangePasswordResponse) => 
          this.onChangePasswordSuccess(response), 
        (response: IUserChangePasswordResponse) => 
          this.onChangePasswordFail(response), 
      );
  }

  private onChangePasswordSuccess(res: IUserChangePasswordResponse) {
    console.log(res);
    this.route.navigate(['']);
  }

  private onChangePasswordFail(res: IUserChangePasswordResponse) {
    console.log(res);
  }

  public constructor (
    public formUserChangePassword: FormUserChangePasswordService, 
    public formUserForgotPassword: FormUserForgotPasswordService, 
    private route: Router, 
    private userService: UserService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();

    this.formUserChangePassword.clearForm();
  }
}
