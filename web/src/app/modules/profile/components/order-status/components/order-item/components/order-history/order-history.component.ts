import { Component, Input, OnInit } from '@angular/core';
import { IOrderStatusGetByOrderIdParams } from '../../../../../../../../core/interfaces/api/parameters/order-status-get-by-order-params';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IOrderStatusGetByOrderIdResponse } from '../../../../../../../../core/interfaces/api/response/order-status-get-by-order-id-response';
import { OrderStatusService } from '../../../../../../../../core/services/order-status.service';
import { IOrderStatusResponse } from '../../../../../../../../core/interfaces/api/response/order-status-response';
import { EOrderStatus } from '../../../../../../../../core/enums/order-status';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [NzTimelineModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent implements OnInit {
  @Input() idOrder: string = "";
  public destroy = new Subject<void>();
  public orderStatuss: IOrderStatusResponse[] = [];

  public constructor (
    private orderStatusService: OrderStatusService, 
  ) {}

  public ngOnInit(): void {
    const params: IOrderStatusGetByOrderIdParams = {
      idOrder: this.idOrder,
    }
    
    this.orderStatusService.getByOrderId(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IOrderStatusGetByOrderIdResponse>) => 
          this.onOrderStatusGetByOrderIdResponse(response), 
        (response: HttpResponse<IOrderStatusGetByOrderIdResponse>) => 
          this.onOrderStatusGetByOrderIdFail(response), 
      )
  }

  public onOrderStatusGetByOrderIdResponse(res: HttpResponse<IOrderStatusGetByOrderIdResponse>) {
    console.log(res);

    if (res.body) {
      this.orderStatuss = res.body.data;
    }
  }

  public onOrderStatusGetByOrderIdFail(res: HttpResponse<IOrderStatusGetByOrderIdResponse>) {
    console.log(res);
  }

  public getDate(date: Date) {
    return new Date(date.toLocaleString()).toLocaleString();
  }

  public getOrderStatus(status: string) {
    switch (status) {
      case "create":
        return "Đã tạo đơn hàng";
      case "prepare":
        return "Đang chuẩn bị";
      case "delivery":
        return "Đang vận chuyển";
      case "deliveried":
        return "Đã giao";
      case "done":
        return "Người dùng xác nhận";
      case "cancel":
        return "Đã hủy";
      default:
        return "Không rõ";
    }
  }
}
