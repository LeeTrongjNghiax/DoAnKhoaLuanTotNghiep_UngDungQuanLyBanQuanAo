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

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule, 
    TTextFieldComponent, 
    TButtonComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnDestroy {
  public destroy = new Subject<void>();

  public onRegister() {
    const params: IUserSendOtpParams = {
      email: this.formUserAdd.form.value.email || ''
    }

    this.userService.sendOtp(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserSendOtpResponse) => this.onSendOtpSuccess(response), 
        (response: IUserSendOtpResponse) => this.onSendOtpFail(response), 
      )

    this.router.navigate(
      [`/otp-input`, { email: this.formUserAdd.form.value.email }], 
    );
  }

  private onSendOtpSuccess(res: IUserSendOtpResponse) {
    console.log(res);
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
