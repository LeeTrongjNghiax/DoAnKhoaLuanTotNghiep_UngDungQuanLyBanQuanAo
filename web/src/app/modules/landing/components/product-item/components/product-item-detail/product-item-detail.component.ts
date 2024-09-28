import { Component, Input } from '@angular/core';
import { IProductResponse } from '../../../../../../core/interfaces/api/response/product-response';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../../../../../core/services/product.service';
import { IProductGetByBarcodeParams } from '../../../../../../core/interfaces/api/parameters/product-get-by-barcode-params';
import { IProductGetByBarcodeResponse } from '../../../../../../core/interfaces/api/response/product-get-by-barcode-response';
import { HttpResponse } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IProductDetailResponse } from '../../../../../../core/interfaces/api/response/product-detail-response';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [CommonModule, NgIf, NzTableModule, NgFor, RouterLink, NzCarouselModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.scss'
})
export class ProductItemDetailComponent {
  public product: IProductResponse | undefined;
  public productDetails: IProductDetailResponse[] = [];
  public destroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
  ) {}

  public ngOnInit(): void {
    const params: IProductGetByBarcodeParams = {
      barcode: this.route.snapshot.paramMap.get("id") || ''
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

  public onGetProductByBarcodeSuccess(
    response: HttpResponse<IProductGetByBarcodeResponse>
  ) {
    this.product = response.body?.mess.product;
    this.productDetails = response.body?.mess.productDetail || [];
  }
  
  public onGetProductByBarcodeFail(
    response: HttpResponse<IProductGetByBarcodeResponse>
  ) {
    console.log(response);
  }
  
  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
