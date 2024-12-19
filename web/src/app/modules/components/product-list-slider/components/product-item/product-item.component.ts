import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProductItemModalComponent } from './components/product-item-modal/product-item-modal.component';
import { IProductResponse } from '../../../../../core/interfaces/api/response/product-response';
import { FormatCurrencyPipe } from '../../../../../shared/pipes/format-currency.pipe';
import { PromotionProductService } from '../../../../../core/services/promotion-product.service';
import { Subject, takeUntil } from 'rxjs';
import { IPromotionProductGetParams } from '../../../../../core/interfaces/api/parameters/promotion-product-get-params';
import { HttpResponse } from '@angular/common/http';
import { IPromotionProductGetByProductResponse } from '../../../../../core/interfaces/api/response/promotion-product-get-by-product-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    AngularSvgIconModule,
    NzModalModule,
    ProductItemModalComponent, 
    FormatCurrencyPipe
],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProductResponse;
  @Input() isModalOpen: boolean = false;
  public destroy = new Subject<void>();
  public priceDiscount: string = "";

  constructor(
    private promotionProductService: PromotionProductService, 
  ) {}
  public ngOnInit(): void {
    const params: IPromotionProductGetParams = {
      type: 'all',
      page: 1,
      size: 1
    }

    this.promotionProductService.getProduct(this.product.barcode)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IPromotionProductGetByProductResponse>) => 
          this.onPromotionProductGetSuccess(response), 
        (response: HttpResponse<IPromotionProductGetByProductResponse>) => 
          this.onPromotionProductGetFail(response), 
      )
  }

  public onPromotionProductGetSuccess(res: HttpResponse<IPromotionProductGetByProductResponse>) {
    console.log(res);

    if (res.body) {
      this.priceDiscount = res.body.data.priceDiscount;
    }
  }

  public onPromotionProductGetFail(res: HttpResponse<IPromotionProductGetByProductResponse>) {
    console.log(res);
  }

  public toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  public handleOk() {
    this.toggleModal();
  }

  public handleCancel() {
    this.toggleModal();
  }
}
