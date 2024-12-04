import { CommonModule } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormUserLoginService } from './services/form-user-login.service';
import { IUserLoginParams } from '../../core/interfaces/api/parameters/user-login-params.interface';
import { IUserLoginResponse } from '../../core/interfaces/api/response/user-login-response.interface';
import { UserService } from '../../core/services/user.service';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TCheckboxWithLabelComponent } from '../../shared/components/checkbox-with-label/checkbox-with-label.component';
import { TLinkComponent } from '../../shared/components/link/link.component';
import { TPasswordFieldComponent } from '../../shared/components/password-field/password-field.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { EHttpResponseCode } from '../../core/enums/http-response-code';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import data from '../../../../public/data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TButtonComponent,
    TCheckboxWithLabelComponent,
    TLinkComponent,
    TPasswordFieldComponent, 
    TTextFieldComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;
  public errorMessage: string = '';
  public isLoading: boolean = false;

  public isDisable() {
    return this.formUserLoginService.form.invalid;
  }

  public onClickLogIn() {
    this.errorMessage = '';
    this.isFormSubmited = true;
    this.isLoading = true;

    if (!this.formUserLoginService.form.valid) {
      this.formUserLoginService.form.markAllAsTouched();
      return;
    }

    const params: IUserLoginParams = {
      username: this.formUserLoginService.form.value.username || '', 
      password: this.formUserLoginService.form.value.password || '', 
    }

    console.log(params);
   
    // if (data.users.find((e) => 
    //   (e.email === params.username && e.password === params.password) ||
    //   (e.name === params.username && e.password === params.password)
    // )) {
    //   localStorage.setItem('token', 'token_test');
    //   this.route.navigate(['/']);
    // } else {
    //   this.errorMessage = 'Tên tài khoản hoặc mật khẩu không đúng';
    // }

    this.userService.login(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserLoginResponse>) => 
          this.onLoginSuccess(response), 
        (response: HttpResponse<IUserLoginResponse>) => 
          this.onLoginFail(response), 
      );
  }

  private onLoginSuccess(res: HttpResponse<IUserLoginResponse>) {
    this.isLoading = false;

    switch (res.status) {
      case EHttpResponseCode.OK:
        this.notificationService.success(
          '', 
          'Login successfully!', 
          { nzPlacement: 'topRight' }
        )
        localStorage.setItem("token", res.body?.data.token!);
        this.route.navigate(['/']);
        window.location.reload();
        break;
      case EHttpResponseCode.INTERNAL_SERVER_ERROR:
        this.errorMessage = res.statusText
        break;
      case EHttpResponseCode.NO_CONTENT:
        this.errorMessage = 'Tên tài khoản hoặc mật khẩu không đúng'
        break;
      default:
        break;
    }
  }

  private onLoginFail(res: HttpResponse<IUserLoginResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
    console.log(res);
  }

  public constructor (
    private route: Router, 
    private userService: UserService, 
    private notificationService: NzNotificationService, 
    public formUserLoginService: FormUserLoginService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();

    this.formUserLoginService.clearForm();
  }
}
