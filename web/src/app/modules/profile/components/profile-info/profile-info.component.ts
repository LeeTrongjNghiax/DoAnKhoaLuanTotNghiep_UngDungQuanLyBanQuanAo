import { Component, OnInit } from '@angular/core';
import { TTextFieldComponent } from "../../../../shared/components/text-field/text-field.component";
import { TButtonComponent } from "../../../../shared/components/button/button.component";
import { Router } from '@angular/router';
import { UserService } from '../../../../core/services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { IUserGetByTokenParams } from '../../../../core/interfaces/api/parameters/user-get-by-token-params';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../../../core/interfaces/api/response/user-get-by-token-response';
import { IUserGetByIdResponse } from '../../../../core/interfaces/api/response/user-get-by-id-response';
import { IUserResponse } from '../../../../core/interfaces/api/response/user-response';
import { IUserUpdateParams } from '../../../../core/interfaces/api/parameters/user-update-params';
import { IUserUpdateResponse } from '../../../../core/interfaces/api/response/user-update-response';
import { FormUserUpdateService } from './services/form-user-update.service';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [TTextFieldComponent, TTextFieldComponent, TButtonComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent implements OnInit {
  public destroy = new Subject<void>();
  public user!: IUserResponse;

  public constructor(
    private route: Router, 
    private userService: UserService, 
    public formUserUpdateService: FormUserUpdateService, 
  ) {}

  public ngOnInit(): void {
    const params: IUserGetByTokenParams = {
      token: localStorage.getItem('token') || "", 
    }

    this.userService.getByToken(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserGetByTokenResponse>) => 
          this.onUserGetByTokenSuccess(response), 
        (response: HttpResponse<IUserGetByTokenResponse>) => 
          this.onUserGetByTokenFail(response), 
      )
  }

  public onUserGetByTokenSuccess(res: HttpResponse<IUserGetByTokenResponse>) {
    console.log(res);

    if (res.body) {      
      this.userService.getById(res.body.data)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IUserGetByIdResponse>) => 
            this.onUserGetByIdSuccess(response), 
          (response: HttpResponse<IUserGetByIdResponse>) => 
            this.onUserGetByIdFail(response), 
        )
    }
  }

  public onUserGetByTokenFail(res: HttpResponse<IUserGetByTokenResponse>) {
    console.log(res);
  }

  public onUserGetByIdSuccess(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);

    if (res.body) {
      this.user = res.body.data;
    }
  }

  public onUserGetByIdFail(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
  }

  public onClickSignOut() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
    window.location.reload();
  }

  public onClickUpdate() {
    const params: IUserUpdateParams = {
      id: this.user.id,
      avatar: this.user.avatar,
      name: this.user.name,
      phone: this.user.phone,
      email: this.user.email,
      gender: this.user.gender,
      birthday: new Date(),
      status: 'active',
      role: '1', 
      address: {
        street: '', 
        ward: '', 
        district: '', 
      }
    }

    this.userService.update(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserUpdateResponse>) => 
          this.onUpdateUserSuccess(response), 
        (response: HttpResponse<IUserUpdateResponse>) => 
          this.onUpdateUserFail(response), 
      )
  }

  public onUpdateUserSuccess(res: HttpResponse<IUserUpdateResponse>) {
    console.log(res);
  }

  public onUpdateUserFail(res: HttpResponse<IUserUpdateResponse>) {
    console.log(res);
  }
}
