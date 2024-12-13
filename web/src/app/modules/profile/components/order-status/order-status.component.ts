import { Component, OnInit } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { IUserGetByTokenParams } from '../../../../core/interfaces/api/parameters/user-get-by-token-params';
import { UserService } from '../../../../core/services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../../../core/interfaces/api/response/user-get-by-token-response';
import { OrderService } from '../../../../core/services/order.service';
import { IOrderGetByUserResponse } from '../../../../core/interfaces/api/response/order-get-by-user-response';
import { IOrderResponse } from '../../../../core/interfaces/api/response/order-response';
import { OrderItemComponent } from "./components/order-item/order-item.component";
import { OrderHeaderComponent } from "./components/order-header/order-header.component";
import { EOrderStatus } from '../../../../core/enums/order-status';

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports: [NzTabsModule, OrderItemComponent, OrderHeaderComponent],
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent implements OnInit {
  public destroy = new Subject<void>();
  public orders: IOrderResponse[] = [];

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

  public onGetUserByTokenSuccess(res: HttpResponse<IUserGetByTokenResponse>) {
    if (res.body?.data) {
      this.orderService.getByUser(res.body.data)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IOrderGetByUserResponse>) => 
            this.onOrderGetByUserSuccess(response), 
          (response: HttpResponse<IOrderGetByUserResponse>) => 
            this.onOrderGetByUserFail(response), 
        )
    }
  }

  public onGetUserByTokenFail(res: HttpResponse<IUserGetByTokenResponse>) {
    console.log(res);
  }

  public onOrderGetByUserSuccess(res: HttpResponse<IOrderGetByUserResponse>) {
    console.log(res);
    if (res.body) {
      this.orders = res.body.data;
    }
  }

  public onOrderGetByUserFail(res: HttpResponse<IOrderGetByUserResponse>) {
    console.log(res);
  }

  public get EOrderStatus() {
    return EOrderStatus;
  }

  constructor(
    private userService: UserService, 
    private orderService: OrderService, 
  ) {}
}
