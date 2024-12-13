import { Component, OnInit } from '@angular/core';
import data from '../../../../../../public/data';
import { OrderItemComponent } from "./components/order-item/order-item.component";
import { OrderService } from '../../../../core/services/order.service';
import { UserService } from '../../../../core/services/user.service';
import { IUserGetByTokenParams } from '../../../../core/interfaces/api/parameters/user-get-by-token-params';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../../../core/interfaces/api/response/user-get-by-token-response';
import { ICartGetByIdUserParams } from '../../../../core/interfaces/api/parameters/cart-get-by-id-user-params';
import { IOrderGetByUserResponse } from '../../../../core/interfaces/api/response/order-get-by-user-response';
import { IOrderResponse } from '../../../../core/interfaces/api/response/order-response';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [OrderItemComponent],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent implements OnInit {
  public orders: IOrderResponse[] = [];
  public destroy = new Subject<void>();

  constructor(
    private orderService: OrderService, 
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

  public onGetUserByTokenSuccess(res: HttpResponse<IUserGetByTokenResponse>) {
    if (res.body?.data) {
      const idUser = res.body.data;

      this.orderService.getByUser(idUser)
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
}
