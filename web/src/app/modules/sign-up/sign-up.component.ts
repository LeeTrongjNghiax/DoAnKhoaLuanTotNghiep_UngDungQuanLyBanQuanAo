import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUserAddService } from '../../core/services/form-user-add.service';
import { Router } from '@angular/router';
import { IUserSendOtpParams } from '../../../interfaces/api/parameters/user-send-otp-params';
import { IUserSendOtpResponse } from '../../../interfaces/api/response/user-send-otp-response';
import { TPasswordFieldComponent } from "../../shared/components/password-field/password-field.component";
import { ObjectHasPropertyPipe } from '../../shared/pipes/object-has-property.pipe';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    TTextFieldComponent,
    TButtonComponent,
    ReactiveFormsModule,
    TPasswordFieldComponent,
    ObjectHasPropertyPipe
],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnDestroy {
  public destroy = new Subject<void>();
  public isFormSubmited: boolean = false;

  public onRegister() {
    this.isFormSubmited = true;

    if (!this.formUserAdd.form.valid) {
      this.formUserAdd.form.markAllAsTouched();
      return;
    }

    const params: IUserSendOtpParams = {
      email: this.formUserAdd.form.value.email || ''
    }

    this.userService.sendOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserSendOtpResponse) => this.onSendOtpSuccess(response), 
        (response: IUserSendOtpResponse) => this.onSendOtpFail(response), 
      )
  }

  private onSendOtpSuccess(res: IUserSendOtpResponse) {
    console.log(res);
    this.router.navigate(
      [`/otp-input`, { email: this.formUserAdd.form.value.email }], 
    );
  }

  private onSendOtpFail(res: IUserSendOtpResponse) {
    console.log(res);
  }

  public constructor (
    private router: Router, 
    private userService: UserService, 
    public formUserAdd: FormUserAddService
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
