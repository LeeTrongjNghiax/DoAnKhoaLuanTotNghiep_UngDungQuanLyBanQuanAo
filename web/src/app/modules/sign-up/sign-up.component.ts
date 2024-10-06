import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FormUserSignUpService } from './services/form-user-sign-up.service';
import { IUserSendOtpParams } from '../../core/interfaces/api/parameters/user-send-otp-params';
import { IUserSendOtpResponse } from '../../core/interfaces/api/response/user-send-otp-response';
import { OtpService } from '../../core/services/otp.service';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TPasswordFieldComponent } from "../../shared/components/password-field/password-field.component";
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { ObjectHasPropertyPipe } from '../../shared/pipes/object-has-property.pipe';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ObjectHasPropertyPipe, 
    TButtonComponent,
    TPasswordFieldComponent,
    TTextFieldComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;
  public isLoading: boolean = false;
  public errorMessage: string = "";

  public onRegister() {
    this.isFormSubmited = true;
    this.isLoading = true;
    this.errorMessage = "";

    if (!this.formUserSignUpService.form.valid) {
      this.formUserSignUpService.form.markAllAsTouched();
      return;
    }

    const params: IUserSendOtpParams = {
      email: this.formUserSignUpService.form.value.email || ''
    }

    this.otpService.sendOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserSendOtpResponse>) => 
          this.onSendOtpSuccess(response), 
        (response: HttpResponse<IUserSendOtpResponse>) => 
          this.onSendOtpFail(response), 
      )
  }

  private onSendOtpSuccess(res: HttpResponse<IUserSendOtpResponse>) {
    this.isLoading = false;
    console.log(res);
    this.router.navigate(
      [`/otp-input-to-sign-up`, { email: this.formUserSignUpService.form.value.email }], 
    );
  }

  private onSendOtpFail(res: HttpResponse<IUserSendOtpResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
    console.log(res);
  }

  public constructor (
    private router: Router, 
    private otpService: OtpService, 
    public formUserSignUpService: FormUserSignUpService
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
