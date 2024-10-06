import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { IProductResponse } from '../../../../../../../../core/interfaces/api/response/product-response';
import { IProductDetailResponse } from '../../../../../../../../core/interfaces/api/response/product-detail-response';
import { ProductService } from '../../../../../../../../core/services/product.service';
import { IProductGetByBarcodeResponse } from '../../../../../../../../core/interfaces/api/response/product-get-by-barcode-response';
import { ProductItemModalComponent } from '../product-item-modal/product-item-modal.component';
import { TCheckboxWithLabelComponent } from "../../../../../../../../shared/components/checkbox-with-label/checkbox-with-label.component";
import { TNumberFieldComponent } from "../../../../../../../../shared/components/number-field/number-field.component";
import { TButtonComponent } from "../../../../../../../../shared/components/button/button.component";
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ProductListComponent } from '../../../../product-list.component';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NzTableModule,
    NgFor,
    RouterLink,
    NzCarouselModule,
    ProductItemModalComponent,
    TCheckboxWithLabelComponent,
    TNumberFieldComponent,
    TButtonComponent,
    NzCollapseModule,
    ProductListComponent
],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.scss'
})
export class ProductItemDetailComponent {
  public panelStyle = {
    background: '#fff', 
    border: 'none', 
    borderBottom: '1px solid #000'
  }
  public product: IProductResponse = {
    barcode: '1',
    description: 'Ao thun trang toi gian',
    gender: '',
    idCatergory: 0,
    imageAlbum: [ "data/images/1.jpg" ],
    name: 'Ao thun trang toi gian',
    price: 100000
  };
  public productDetails: IProductDetailResponse[] = [
    {
      productBarcode: '1',
      size: 'S',
      quantity: '10'
    }, 
    {
      productBarcode: '2',
      size: 'L',
      quantity: '10'
    }, 
  ];
  public destroy = new Subject<void>();

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
  ) {}

  public ngOnInit(): void {
    // const params: IProductGetByBarcodeParams = {
    //   barcode: this.route.snapshot.paramMap.get("id") || ''
    // } 

    // this.productService.getByBarcode(params)
    //   .pipe(takeUntil(this.destroy))
    //   .subscribe(
    //     (response: HttpResponse<IProductGetByBarcodeResponse>) => 
    //       this.onGetProductByBarcodeSuccess(response), 
    //     (response: HttpResponse<IProductGetByBarcodeResponse>) => 
    //       this.onGetProductByBarcodeFail(response), 
    //   )
  }

  public onGetProductByBarcodeSuccess(
    response: HttpResponse<IProductGetByBarcodeResponse>
  ) {
    // this.product = response.body?.mess.product;
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
