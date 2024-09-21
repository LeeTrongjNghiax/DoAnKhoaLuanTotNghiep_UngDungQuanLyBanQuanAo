import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { IUserLoginParams } from '../../../interfaces/api/parameters/user-login-params.interface';
import { Subject, takeUntil } from 'rxjs';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TCheckboxWithLabelComponent } from '../../shared/components/checkbox-with-label/checkbox-with-label.component';
import { TLinkComponent } from '../../shared/components/link/link.component';
import { TPasswordFieldComponent } from '../../shared/components/password-field/password-field.component';
import { FormUserLoginService } from '../../core/services/form-user-login.service';
import { IUserLoginResponse } from '../../../interfaces/api/response/user-login-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    TTextFieldComponent,
    TButtonComponent,
    TCheckboxWithLabelComponent,
    TLinkComponent,
    ReactiveFormsModule,
    TPasswordFieldComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  public destroy = new Subject<void>();

  public isDisable() {
    return this.formUserLogin.form.invalid;
  }

  public onClickLogIn() {
    const params: IUserLoginParams = {
      username: this.formUserLogin.form.value.username || '', 
      password: this.formUserLogin.form.value.password || '', 
    }

    this.userService.login(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserLoginResponse) => this.onLoginSuccess(response), 
        (response: IUserLoginResponse) => this.onLoginFail(response), 
      );
  }

  private onLoginSuccess(res: IUserLoginResponse) {
    console.log(res);
    this.route.navigate(['']);
  }

  private onLoginFail(res: IUserLoginResponse) {
    console.log(res);
  }


  public constructor (
    public formUserLogin: FormUserLoginService, 
    private route: Router, 
    private userService: UserService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();

    this.formUserLogin.clearForm();
  }
}
