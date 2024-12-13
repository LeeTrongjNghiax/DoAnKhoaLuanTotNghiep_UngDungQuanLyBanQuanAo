import { Component, Input, OnInit } from '@angular/core';
import { FormatCurrencyPipe } from '../../../shared/pipes/format-currency.pipe';
import { IOrderResponse } from '../../../core/interfaces/api/response/order-response';
import { IProductResponse } from '../../../core/interfaces/api/response/product-response';
import { IOrderItemResponse } from '../../../core/interfaces/api/response/order-item-response';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from '../../../core/services/product.service';
import { OrderDetailService } from '../../../core/services/order-detail.service';
import { HttpResponse } from '@angular/common/http';
import { IOrderDetailGetByOrderResponse } from '../../../core/interfaces/api/response/order-detail-get-by-order-response';
import { IProductGetByBarcodeResponse } from '../../../core/interfaces/api/response/product-get-by-barcode-response';
import { IProductGetByBarcodeParams } from '../../../core/interfaces/api/parameters/product-get-by-barcode-params';

@Component({
  selector: 'app-order-product-item',
  standalone: true,
  imports: [FormatCurrencyPipe],
  templateUrl: './order-product-item.component.html',
  styleUrl: './order-product-item.component.scss'
})
export class OrderProductItemComponent implements OnInit {
  @Input() order!: IOrderResponse;
  public products: IProductResponse[] = [];
  public orderItems: IOrderItemResponse[] = [];
  public destroy = new Subject<void>();

  constructor(
    private productService: ProductService, 
    private orderDetailService: OrderDetailService, 
  ) {}
  
  public ngOnInit(): void {
    this.orderDetailService.getByOrder(this.order.idOrder)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IOrderDetailGetByOrderResponse>) => 
          this.onOrderDetailGetByOrderSuccess(response), 
        (response: HttpResponse<IOrderDetailGetByOrderResponse>) => 
          this.onOrderDetailGetByOrderFail(response), 
      )

  }

  public onOrderDetailGetByOrderSuccess(res: HttpResponse<IOrderDetailGetByOrderResponse>) {
    console.log(res);

    if (res.body) {
      this.orderItems = res.body.data;

    }

    for (let i = 0; i < this.orderItems.length; i++) {
      const params: IProductGetByBarcodeParams = {
        barcode: this.orderItems[i].idProduct
      }

      this.productService.getByBarcode(params)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IProductGetByBarcodeResponse>) => 
            this.onGetProductByBarcodeSuccess(response), 
          (response: HttpResponse<IProductGetByBarcodeResponse>) => 
            this.onGetProductByBarcodeFail(response), 
        )
    }
  }

  public onOrderDetailGetByOrderFail(res: HttpResponse<IOrderDetailGetByOrderResponse>) {
    console.log(res);
  }

  public onGetProductByBarcodeSuccess(res: HttpResponse<IProductGetByBarcodeResponse>) {
    console.log(res.body);

    if (res.body) {
      this.products.push(res.body.data);
    }
  }

  public onGetProductByBarcodeFail(res: HttpResponse<IProductGetByBarcodeResponse>) {
    console.log(res);
  }

  public getProductById(id: string) {
    const findProductIndex = this.products.findIndex(e => e.barcode === id);

    return this.products[findProductIndex];
  }
}
