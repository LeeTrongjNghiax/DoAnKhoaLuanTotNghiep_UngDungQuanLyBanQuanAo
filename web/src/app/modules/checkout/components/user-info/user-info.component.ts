import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TSelectBoxComponent } from "../../../../shared/components/select-box/select-box.component";
import { IBreadcrumb } from '../../../../shared/components/breadcrumb/types/breadcrumb';
import { ISelectItem } from '../../../../shared/components/select-box/interfaces/select-item.interface';
import data from '../../../../../../public/data';
import { TTextFieldComponent } from "../../../../shared/components/text-field/text-field.component";
import { TButtonComponent } from "../../../../shared/components/button/button.component";
import { TLinkComponent } from "../../../../shared/components/link/link.component";
import { FormUserInfoService } from './services/form-user-info.service';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IUserInfo } from '../../checkout.component';
import { UserService } from '../../../../core/services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { IUserGetByTokenParams } from '../../../../core/interfaces/api/parameters/user-get-by-token-params';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../../../core/interfaces/api/response/user-get-by-token-response';
import { IUserGetByIdResponse } from '../../../../core/interfaces/api/response/user-get-by-id-response';
import { IUserResponse } from '../../../../core/interfaces/api/response/user-response';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule, 
    TSelectBoxComponent, 
    TTextFieldComponent, 
    TButtonComponent, 
    TLinkComponent, 
    NgIf, 
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit {
  public destroy = new Subject<void>();
  public user!: IUserResponse;

  constructor(
    public formUserInfoService: FormUserInfoService, 
    private userService: UserService, 
  ) {}

  public ngOnInit(): void {
    const userParams: IUserGetByTokenParams = {
      token: localStorage.getItem('token') || ''
    }

    this.userService.getByToken(userParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserGetByTokenResponse>) => 
          this.onGetUserByTokenSuccess(response), 
        (response: HttpResponse<IUserGetByTokenResponse>) => 
          this.onGetUserByTokenFail(response), 
      )
  }
  
  public breadcrumbs: IBreadcrumb[] = [
    {label: 'Trang chủ', link: '/'}, 
    {label: 'Thanh toán', link: '/checkout'}
  ];
  public values: ISelectItem<string>[] = data.city;
  @Input() userInfo!: IUserInfo;
  @Output() changeValueEventEmitter: EventEmitter<IUserInfo> = 
    new EventEmitter<IUserInfo>();

  public onGetUserByTokenSuccess(res: HttpResponse<IUserGetByTokenResponse>) {
    if (res.body?.data) {
      const idUser = res.body.data;

      this.userService.getById(idUser)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IUserGetByIdResponse>) => 
            this.onGetUserByIdSuccess(response), 
          (response: HttpResponse<IUserGetByIdResponse>) => 
            this.onGetUserByIdFail(response), 
        )
    }
  }

  public onGetUserByTokenFail(res: HttpResponse<IUserGetByTokenResponse>) {
    console.log(res);
  }

  public onGetUserByIdSuccess(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
    if (res.body) {
      this.user = res.body.data;

      this.userInfo.name = this.user.name;
      this.userInfo.phone = this.user.phone;
    }
  }

  public onGetUserByIdFail(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
  }


  public onClickGoToDelivery() {
    if (!this.formUserInfoService.form.valid) {
      this.formUserInfoService.form.markAllAsTouched();
      return;
    }

    this.changeValueEventEmitter.emit({
      name: this.userInfo.name, 
      phone: this.userInfo.phone, 
      street: this.userInfo.street, 
      city: this.userInfo.city, 
      ward: this.userInfo.ward, 
      district: this.userInfo.district, 
      shippingFee: this.userInfo.shippingFee
    });
  }

  public onChangeName(e: string) {
    this.userInfo.name = e;
  }

  public onChangePhone(e: string) {
    this.userInfo.phone = e;
  }

  public onChangeAddress(e: string) {
    this.userInfo.street = e;
  }

  public onChangeCity(e: string) {
    this.userInfo.city = e;
  }

  public onChangeWard(e: string) {
    this.userInfo.ward = e;
  }
  
  public onChangeDistrict(e: string) {
    this.userInfo.district = e;
  }
}
