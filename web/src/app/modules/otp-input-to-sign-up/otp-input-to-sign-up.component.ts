import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormOtpSignUpService } from './services/form-otp-sign-up.service';
import { FormUserSignUpService } from '../sign-up/services/form-user-sign-up.service';
import { IUserRegisterParams } from '../../core/interfaces/api/parameters/user-register-params';
import { IUserRegisterResponse } from '../../core/interfaces/api/response/user-register-response';
import { UserService } from '../../core/services/user.service';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-otp-input-to-sign-up',
  standalone: true,
  imports: [
    CommonModule,   
    ReactiveFormsModule, 
    TButtonComponent, 
    TTextFieldComponent, 
  ],
  templateUrl: './otp-input-to-sign-up.component.html',
  styleUrl: './otp-input-to-sign-up.component.scss'
})
export class OtpInputToSignUpComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;
  public isLoading: boolean = false;
  public errorMessage: string = "";

  public onSendOtp() {
    this.isFormSubmited = true;
    this.isLoading = true;
    this.errorMessage = "";

    if (!this.formUserSignUpService.form.valid) {
      this.formUserSignUpService.form.markAllAsTouched();
      return;
    }

    const params: IUserRegisterParams = {
      name: this.formUserSignUpService.form.value.name || '', 
      password: this.formUserSignUpService.form.value.password || '', 
      email: this.formUserSignUpService.form.value.email || '', 
      phone: this.formUserSignUpService.form.value.phone || '', 
      otp: this.formOtpSignUpService.form.value.otp || '', 
    }

    this.userService.register(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserRegisterResponse>) => 
          this.onRegisterSuccess(response), 
        (response: HttpResponse<IUserRegisterResponse>) => 
          this.onRegisterFail(response), 
      )
  }

  private onRegisterSuccess(res: HttpResponse<IUserRegisterResponse>) {
    this.isLoading = false;
    console.log(res);
    this.route.navigate(['']);
  }

  private onRegisterFail(res: HttpResponse<IUserRegisterResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
    console.log(res);
  }

  public constructor(
    private route: Router, 
    private userService: UserService, 
    public formUserSignUpService: FormUserSignUpService, 
    public formOtpSignUpService: FormOtpSignUpService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
