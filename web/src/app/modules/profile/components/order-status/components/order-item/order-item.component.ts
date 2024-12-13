import { Component, Input } from '@angular/core';
import { IOrderResponse } from '../../../../../../core/interfaces/api/response/order-response';
import { TButtonComponent } from "../../../../../../shared/components/button/button.component";
import { NzModalModule } from 'ng-zorro-antd/modal';
import { OrderService } from '../../../../../../core/services/order.service';
import { IOrderUpdateByOrderIdAndUserIdResponse } from '../../../../../../core/interfaces/api/response/order-update-by-order-id-and-user-id-response';
import { IOrderUpdateByOrderIdAndUserIdParams } from '../../../../../../core/interfaces/api/parameters/order-update-by-order-id-and-user-id-params';
import { EOrderStatus } from '../../../../../../core/enums/order-status';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { OrderProductItemComponent } from "../../../../../components/order-product-item/order-product-item.component";
import { OrderHistoryComponent } from "./components/order-history/order-history.component";

@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [
    TButtonComponent,
    NzModalModule,
    NzPopconfirmModule,
    OrderProductItemComponent,
    OrderHistoryComponent, 
],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {
  @Input() isShowCancelOrderOption: boolean = true;
  @Input() isShowDoneOrderOption: boolean = false;
  @Input() order!: IOrderResponse;
  public destroy = new Subject<void>();
  public isOrderDetailModalVisible: boolean = false;
  public isOrderHistoryModalVisible: boolean = false;

  constructor(
    private orderService: OrderService, 
    private notificationService: NzNotificationService, 
  ) {}

  public getAddress() {
    return `${this.order.address.street}, ${this.order.address.ward}, ${this.order.address.district}, ${this.order.address.city}`;
  }

  public toggleOrderDetailModal() {
    this.isOrderDetailModalVisible = !this.isOrderDetailModalVisible;
  }

  public toggleOrderHistoryModal() {
    this.isOrderHistoryModalVisible = !this.isOrderHistoryModalVisible;
  }

  public onUpdateOrder(status: EOrderStatus) {
    const params: IOrderUpdateByOrderIdAndUserIdParams = {
      idOrder: this.order.idOrder,
      idUser: this.order.idUser,
      currentStatus: status, 
    }
    
    this.orderService.update(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IOrderUpdateByOrderIdAndUserIdResponse>) => 
          this.onOrderUpdateByOrderIdAndUserIdSuccess(response), 
        (response: HttpResponse<IOrderUpdateByOrderIdAndUserIdResponse>) => 
          this.onOrderUpdateByOrderIdAndUserIdFail(response), 
      )
  }

  public get EOrderStatus() {
    return EOrderStatus;
  }

  public onOrderUpdateByOrderIdAndUserIdSuccess(res: HttpResponse<IOrderUpdateByOrderIdAndUserIdResponse>) {
    console.log(res);
    this.notificationService.success(
      '', 
      'Hủy hóa đơn thành công!', 
      { nzPlacement: 'topRight' }
    )
    window.location.reload();
  }

  public onOrderUpdateByOrderIdAndUserIdFail(res: HttpResponse<IOrderUpdateByOrderIdAndUserIdResponse>) {
    console.log(res);
  }

  public handleOrderDetailModalOk() {
    this.isOrderDetailModalVisible = !this.isOrderDetailModalVisible;
  }

  public handleOrderDetailModalCancel() {
    this.isOrderDetailModalVisible = !this.isOrderDetailModalVisible;
  }

  public handleOrderHistoryModalOk() {
    this.isOrderHistoryModalVisible = !this.isOrderHistoryModalVisible;
  }

  public handleOrderHistoryModalCancel() {
    this.isOrderHistoryModalVisible = !this.isOrderHistoryModalVisible;
  }

  public getDate() {
    return new Date(this.order.dateTime).toLocaleString();
  }
}
