import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { CommonModule, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TCheckboxWithLabelComponent } from '../../shared/components/checkbox-with-label/checkbox-with-label.component';
import { TNumberFieldComponent } from '../../shared/components/number-field/number-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { IProductResponse } from '../../core/interfaces/api/response/product-response';
import { ProductService } from '../../core/services/product.service';
import { IProductGetByBarcodeResponse } from '../../core/interfaces/api/response/product-get-by-barcode-response';
import { IBreadcrumb } from '../../shared/components/breadcrumb/types/breadcrumb';
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";
import { ProductSectionComponent } from "../components/product-section/product-section.component";
import { ProductItemModalComponent } from '../components/product-list-slider/components/product-item/components/product-item-modal/product-item-modal.component';
import { IProductGetByBarcodeParams } from '../../core/interfaces/api/parameters/product-get-by-barcode-params';
import { ProductVariantService } from '../../core/services/product-variant.service';
import { IProductVariantGetByBarcodeParams } from '../../core/interfaces/api/parameters/product-variant-get-by-barcode-params';
import { IProductVariantGetByBarcodeResponse } from '../../core/interfaces/api/response/product-variant-get-by-barcode-response';
import { TRadioWithLabelComponent } from "../../shared/components/radio-with-label/radio-with-label.component";
import { RadioGroupComponent } from "../../shared/components/radio-group/radio-group.component";
import { IRadioOption } from '../../shared/components/radio-group/interfaces/radio-option.interface';
import { CartService } from '../../core/services/cart.service';
import { ICartGetByIdUserResponse } from '../../core/interfaces/api/response/cart-get-by-id-user-response';
import { ICartGetByIdUserParams } from '../../core/interfaces/api/parameters/cart-get-by-id-user-params';
import { UserService } from '../../core/services/user.service';
import { IUserGetByTokenParams } from '../../core/interfaces/api/parameters/user-get-by-token-params';
import { IUserGetByTokenResponse } from '../../core/interfaces/api/response/user-get-by-token-response';
import { ICartUpdateParams } from '../../core/interfaces/api/parameters/cart-update-params';
import { ICartResponse } from '../../core/interfaces/api/response/cart-response';
import { PromotionProductService } from '../../core/services/promotion-product.service';
import { IPromotionProductGetByProductResponse } from '../../core/interfaces/api/response/promotion-product-get-by-product-response';
import { FormatCurrencyPipe } from '../../shared/pipes/format-currency.pipe';

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
    BreadcrumbComponent,
    ProductSectionComponent,
    NgOptimizedImage,
    TRadioWithLabelComponent,
    RadioGroupComponent, 
    FormatCurrencyPipe, 
],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.scss'
})
export class ProductItemDetailComponent implements OnInit {
  public breadcrumbs!: IBreadcrumb[];
  public panelStyle = {
    background: '#fff', 
    border: 'none', 
    borderBottom: '1px solid #000'
  }
  public product!: IProductResponse;
  public destroy = new Subject<void>();
  public quantity: number = 1;
  public barcode: string = "";
  public productVariantRadioGroup: IRadioOption<string>[] = [];
  public selectedProductVariant: string = "";
  public userId: string = '';
  public cart!: ICartResponse;
  public priceDiscount: string = "";

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService, 
    private productService: ProductService, 
    private productVariantService: ProductVariantService, 
    private cartService: CartService, 
    private promotionProductService: PromotionProductService, 
    private messageService: NzMessageService, 
  ) {
    route.params.subscribe(params => {
      this.barcode = params['id'];
      this.breadcrumbs = [
        { label: 'Trang chủ', link: '/' }, 
        { label: 'Danh sách sản phẩm', link: '/product-list' }, 
        {
          label: '', 
          link: `/product-item-detail/${this.product?.barcode}`
        }, 
      ];
    })
  }

  public ngOnInit(): void {
    const params: IProductGetByBarcodeParams = {
      barcode: this.barcode
    } 

    const productVariantParams: IProductVariantGetByBarcodeParams = {
      productBarcode: this.barcode
    }

    const userParams: IUserGetByTokenParams = {
      token: localStorage.getItem('token') || ''
    }

    this.productService.getByBarcode(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IProductGetByBarcodeResponse>) => 
          this.onGetProductByBarcodeSuccess(response), 
        (response: HttpResponse<IProductGetByBarcodeResponse>) => 
          this.onGetProductByBarcodeFail(response), 
      )

    this.productVariantService.getByBarcode(productVariantParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IProductVariantGetByBarcodeResponse>) => 
          this.onGetProductVariantByBarcodeSuccess(response), 
        (response: HttpResponse<IProductVariantGetByBarcodeResponse>) => 
          this.onGetProductVariantByBarcodeFail(response), 
      )

    this.userService.getByToken(userParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IUserGetByTokenResponse>) => 
          this.onGetUserByTokenSuccess(response), 
        (response: HttpResponse<IUserGetByTokenResponse>) => 
          this.onGetUserByTokenFail(response), 
      )

  }

  public onGetProductByBarcodeSuccess(
    response: HttpResponse<IProductGetByBarcodeResponse>
  ) {
    if (response.body?.data) {
      this.product = response.body?.data;

      this.breadcrumbs = [
        {label: 'Trang chủ', link: '/'}, 
        {label: 'Danh sách sản phẩm', link: '/product-list'}, 
        {
          label: this.product?.name + '', 
          link: `/product-item-detail/${this.product?.barcode}`
        }, 
      ];

      this.promotionProductService.getProduct(this.product.barcode)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IPromotionProductGetByProductResponse>) => 
            this.onPromotionProductGetByProductSuccess(response), 
          (response: HttpResponse<IPromotionProductGetByProductResponse>) => 
            this.onPromotionProductGetByProductFail(response), 
        )
    }
  }
  
  public onGetProductByBarcodeFail(
    response: HttpResponse<IProductGetByBarcodeResponse>
  ) {
    console.log(response);
  }

  public onPromotionProductGetByProductSuccess(res: HttpResponse<IPromotionProductGetByProductResponse>) {
    console.log(res);
    if (res.body) {
      this.priceDiscount = res.body.data.priceDiscount;
    }
  }

  public onPromotionProductGetByProductFail(res: HttpResponse<IPromotionProductGetByProductResponse>) {
    console.log(res);
  }

  public onGetProductVariantByBarcodeSuccess(
    response: HttpResponse<IProductVariantGetByBarcodeResponse>
  ) {
    if (response.body?.data) {
      response.body.data.map(e => this.productVariantRadioGroup.push({
        label: e.size, value: e.size
      }));

      this.selectedProductVariant = response.body.data[0].size;
    }
  }
  
  public onGetProductVariantByBarcodeFail(
    response: HttpResponse<IProductVariantGetByBarcodeResponse>
  ) {
    console.log(response);
  }

  public onGetUserByTokenSuccess(res: HttpResponse<IUserGetByTokenResponse>) {
    if (res.body?.data) {
      this.userId = res.body.data;

      const cartParams: ICartGetByIdUserParams = {
        idUser: this.userId
      }

      this.cartService.getByIdUser(cartParams)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<ICartGetByIdUserResponse>) => 
            this.onGetCartByIdUserSuccess(response), 
          (response: HttpResponse<ICartGetByIdUserResponse>) => 
            this.onGetCartByIdUserFail(response), 
        )
    }
  }

  public onGetUserByTokenFail(res: HttpResponse<IUserGetByTokenResponse>) {
    console.log(res);
  }

  public onGetCartByIdUserSuccess(res: HttpResponse<ICartGetByIdUserResponse>) {
    if (res.body?.data) {
      this.cart = res.body.data;
    }
  }

  public onGetCartByIdUserFail(res: HttpResponse<ICartGetByIdUserResponse>) {
    console.log(res);
  }

  public onQuantityChange(e: number) {
    this.quantity = e;
  }

  public onProductVariantChange(e: string) {
    this.selectedProductVariant = e;
  }

  public onAddProductToCart() {
    console.log("Selected product variant", this.selectedProductVariant);
      
    const indexOfExistProduct = this.cart.listCartItem.findIndex(e => 
      e.idProduct === this.product.barcode && 
      e.sizeProduct === this.selectedProductVariant
    );

    if (indexOfExistProduct >= 0)
      this.cart.listCartItem[indexOfExistProduct].quantity = 
        +this.cart.listCartItem[indexOfExistProduct].quantity + +this.quantity + '';
    else
      this.cart.listCartItem.push({
        idProduct: this.product.barcode,
        quantity: this.quantity + '',
        timeCreate: new Date().toISOString(), 
        sizeProduct: this.selectedProductVariant
      })

    const cartParams: ICartUpdateParams = {
      id: this.cart.id,
      idUser: this.userId,
      listCartItem: this.cart.listCartItem, 
    }

    this.cartService.update(cartParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<ICartResponse>) => 
          this.onUpdateCartSuccess(response), 
        (response: HttpResponse<ICartResponse>) => 
          this.onUpdateCartFail(response), 
      );
  }

  public onUpdateCartSuccess(res: HttpResponse<ICartResponse>) {
    console.log(res);
    this.messageService.create(
      'success',
      'Add product to cart successfully!'
    );
  }

  public onUpdateCartFail(res: HttpResponse<ICartResponse>) {
    console.log(res);
    this.messageService.create(
      'fail',
      'Add product to cart failed!'
    );
  }

  public isAddToCartButtonDisable() {
    return !this.selectedProductVariant;
  }
  
  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
