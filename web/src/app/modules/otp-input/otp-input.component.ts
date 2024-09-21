import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { UserService } from '../../core/services/user.service';
import { FormUserAddService } from '../../core/services/form-user-add.service';
import { IUserRegisterParams } from '../../../interfaces/api/parameters/user-register-params';
import { Subject, takeUntil } from 'rxjs';
import { IUserRegisterResponse } from '../../../interfaces/api/response/user-register-response';

@Component({
  selector: 'app-otp-input',
  standalone: true,
  imports: [TTextFieldComponent, TButtonComponent],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss'
})
export class OtpInputComponent implements OnInit, OnDestroy {
  public destroy = new Subject<void>();
  public email: string | null = '';
  public otp: string = '';

  public onChangeOtp(e: string) {
    this.otp = e;
  }

  public onSendOtp() {
    const params: IUserRegisterParams = {
      name: this.formUserAdd.form.value.name || '', 
      password: this.formUserAdd.form.value.password || '', 
      email: this.formUserAdd.form.value.email || '', 
      phone: this.formUserAdd.form.value.phone || '', 
      otp: this.otp || '', 
    }

    this.userService.register(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: IUserRegisterResponse) => this.onRegisterSuccess(response), 
        (response: IUserRegisterResponse) => this.onRegisterFail(response), 
      )
  }

  private onRegisterSuccess(res: IUserRegisterResponse) {
    console.log(res);
    this.route.navigate(['']);
  }

  private onRegisterFail(res: IUserRegisterResponse) {
    console.log(res);
  }

  public constructor(
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private userService: UserService, 
    private formUserAdd: FormUserAddService, 
  ) {}

  public ngOnInit(): void {
    this.email = this.activeRoute.snapshot.paramMap.get("email");
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
