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
  public isLoginFail: boolean = false;
  public isFormSubmited: boolean = false;

  public isDisable() {
    return this.formUserLoginService.form.invalid;
  }

  public onClickLogIn() {
    this.isFormSubmited = true;

    if (!this.formUserLoginService.form.valid) {
      this.formUserLoginService.form.markAllAsTouched();
      return;
    }

    const params: IUserLoginParams = {
      username: this.formUserLoginService.form.value.username || '', 
      password: this.formUserLoginService.form.value.password || '', 
    }

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
    this.isLoginFail = true;
    console.log(res);
    this.route.navigate(['']);
  }

  private onLoginFail(res: HttpResponse<IUserLoginResponse>) {
    console.log(res);
  }

  public constructor (
    private route: Router, 
    private userService: UserService, 
    public formUserLoginService: FormUserLoginService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();

    this.formUserLoginService.clearForm();
  }
}
