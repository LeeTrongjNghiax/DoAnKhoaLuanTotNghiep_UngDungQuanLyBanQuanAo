import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from '../../shared/components/breadcrumb/types/breadcrumb';
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";
import { TTextFieldComponent } from "../../shared/components/text-field/text-field.component";
import { TSelectBoxComponent } from "../../shared/components/select-box/select-box.component";
import { ISelectItem } from '../../shared/components/select-box/interfaces/select-item.interface';
import data from '../../../../public/data';
import { Router, RouterOutlet } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TLinkComponent } from "../../shared/components/link/link.component";
import { TButtonComponent } from "../../shared/components/button/button.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";
import { DeliveryInfoComponent } from "./components/delivery-info/delivery-info.component";
import { PaymentInfoComponent } from "./components/payment-info/payment-info.component";
import { CartService } from '../../core/services/cart.service';
import { UserService } from '../../core/services/user.service';
import { ProductService } from '../../core/services/product.service';
import { OrderService } from '../../core/services/order.service';
import { IUserGetByTokenParams } from '../../core/interfaces/api/parameters/user-get-by-token-params';
import { Subject, takeUntil } from 'rxjs';
import { ICartResponse } from '../../core/interfaces/api/response/cart-response';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../core/interfaces/api/response/user-get-by-token-response';
import { ICartGetByIdUserParams } from '../../core/interfaces/api/parameters/cart-get-by-id-user-params';
import { IUserGetByIdResponse } from '../../core/interfaces/api/response/user-get-by-id-response';
import { ICartGetByIdUserResponse } from '../../core/interfaces/api/response/cart-get-by-id-user-response';
import { IProductGetByBarcodeParams } from '../../core/interfaces/api/parameters/product-get-by-barcode-params';
import { IProductGetByBarcodeResponse } from '../../core/interfaces/api/response/product-get-by-barcode-response';
import { IProductResponse } from '../../core/interfaces/api/response/product-response';
import { FormatCurrencyPipe } from '../../shared/pipes/format-currency.pipe';
import { IOrderItemResponse } from '../../core/interfaces/api/response/order-item-response';
import { IOrderSaveParams } from '../../core/interfaces/api/parameters/order-save-params';
import { IOrderSaveResponse } from '../../core/interfaces/api/response/order-save-response';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { OrderProductItemComponent } from "../components/order-product-item/order-product-item.component";
import { NgIf } from '@angular/common';
import { PromotionProductService } from '../../core/services/promotion-product.service';
import { IPromotionProductGetParams } from '../../core/interfaces/api/parameters/promotion-product-get-params';
import { IPromotionProductGetResponse } from '../../core/interfaces/api/response/promotion-product-get-response';
import { IPromotionProductResponse } from '../../core/interfaces/api/response/promotion-product-response';
import { IUserResponse } from '../../core/interfaces/api/response/user-response';

export interface IUserInfo {
  name: string, 
  phone: string, 
  street: string, 
  city: string, 
  ward: string, 
  district: string, 
  shippingFee: number, 
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    NgIf, 
    BreadcrumbComponent,
    TTextFieldComponent,
    TSelectBoxComponent,
    RouterOutlet,
    NzTabsModule,
    TLinkComponent,
    TButtonComponent,
    UserInfoComponent,
    DeliveryInfoComponent,
    PaymentInfoComponent,
    FormatCurrencyPipe,
    OrderProductItemComponent, 
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [
    {label: 'Trang chủ', link: '/'}, 
    {label: 'Thanh toán', link: '/checkout'}
  ];
  public values: ISelectItem<string>[] = data.city;
  public selectedTabIndex: number = 0;
  public userInfo: IUserInfo = {
    name: '',
    phone: '',
    street: '', 
    city: '',
    ward: '',
    district: '',
    shippingFee: 30000,
  }
  public destroy = new Subject<void>();
  public user!: IUserResponse;
  public cart!: ICartResponse;
  public products: IProductResponse[] = [];
  public promotionProducts: IPromotionProductResponse[] = [];

  constructor(
    private userService: UserService, 
    private cartService: CartService, 
    private productService: ProductService, 
    private orderService: OrderService, 
    private promotionProductService: PromotionProductService, 
    private notificationService: NzNotificationService, 
    private route: Router, 
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
      const cartParams: ICartGetByIdUserParams = {
        idUser: res.body.data
      }

      const idUser = res.body.data;

      this.userService.getById(idUser)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IUserGetByIdResponse>) => 
            this.onGetUserByIdSuccess(response), 
          (response: HttpResponse<IUserGetByIdResponse>) => 
            this.onGetUserByIdFail(response), 
        )

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
    console.log(res.body?.data);

    if (res.body?.data) {
      this.cart = res.body.data;
    }

    if (this.cart.listCartItem) {
      this.cart.listCartItem.map(e => {
        const params: IProductGetByBarcodeParams = {
          barcode: e.idProduct
        }

        this.productService.getByBarcode(params)
          .pipe(takeUntil(this.destroy))
          .subscribe(
            (response: HttpResponse<IProductGetByBarcodeResponse>) => 
              this.onGetProductByBarcodeSuccess(response), 
            (response: HttpResponse<IProductGetByBarcodeResponse>) => 
              this.onGetProductByBarcodeFail(response), 
          )
      })
    }
  }

  public onGetProductByBarcodeSuccess(res: HttpResponse<IProductGetByBarcodeResponse>) {
    console.log(res.body);

    if (res.body) {
      this.products.push(res.body.data);

      const params: IPromotionProductGetParams = {
        type: 'all',
        page: 1,
        size: 1000
      }
      
      this.promotionProductService.get(params)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IPromotionProductGetResponse>) => 
            this.onPromotionProductGetSuccess(response), 
          (response: HttpResponse<IPromotionProductGetResponse>) => 
            this.onPromotionProductGetFail(response), 
        );
    }
  }

  public onGetProductByBarcodeFail(res: HttpResponse<IProductGetByBarcodeResponse>) {
    console.log(res);
  }

  public onPromotionProductGetSuccess(res: HttpResponse<IPromotionProductGetResponse>) {
    console.log(res);

    if (res.body) {
      this.promotionProducts = res.body.data;
    }

    this.getPromotionProductByBarcode("1");
  }

  public onPromotionProductGetFail(res: HttpResponse<IPromotionProductGetResponse>) {
    console.log(res);
  }

  public onGetCartByIdUserFail(res: HttpResponse<ICartGetByIdUserResponse>) {
    console.log(res);
  }

  public onGetUserByIdSuccess(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
    if (res.body) {
      this.user = res.body.data;
    }
  }

  public onGetUserByIdFail(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
  }

  public onChangeUserInfo(e: IUserInfo) {
    this.userInfo = this.userInfo;

    if (!this.isDeliveryTabDisable())
      this.selectedTabIndex += 1;
  }

  public onChangeDeliveryInfo(e: any) {
    if (!this.isPaymentTabDisable())
      this.selectedTabIndex += 1;
  }

  public isDeliveryTabDisable() {
    const rs = !(
      this.userInfo.name &&
      this.userInfo.phone &&
      this.userInfo.city &&
      this.userInfo.ward &&
      this.userInfo.district
    );

    return rs;
  }

  public isPaymentTabDisable() {
    const rs = !(
      this.userInfo.name &&
      this.userInfo.phone &&
      this.userInfo.city &&
      this.userInfo.ward &&
      this.userInfo.district
    );

    return rs;
  }

  public getProductById(id: string) {
    const findProductIndex = this.products.findIndex(e => e.barcode === id);

    return this.products[findProductIndex];
  }

  public getPromotionProductByBarcode(id: string) {
    let priceDiscount = "0";

    this.promotionProducts.map(e => {
      const index = e.listPromotionProduct.findIndex(product => {
        return product.barcode === id;
      });

      if (index >= 0) {
        priceDiscount = e.listPromotionProduct[index].priceDiscount;
      }
    });

    return priceDiscount;
  }

  public getTotal() {
    let amount = 0;

    if (this.cart.listCartItem) {
      for (let i = 0; i < this.cart.listCartItem.length; i++) {
        const indexProductPrice = this.products.findIndex(
          e => e.barcode === this.cart.listCartItem[i].idProduct
        );
        const priceDiscount = this.getPromotionProductByBarcode(
          this.cart.listCartItem[i].idProduct
        );

        const price = this.products[indexProductPrice].price - +priceDiscount;
        const quantity = +this.cart.listCartItem[i].quantity;

        amount += price * quantity;
      }
    }

    return amount;
  }

  public onClickPay() {
    const listProduct: IOrderItemResponse[] = [];

    this.cart.listCartItem.map((e, index) => {
      const priceDiscount = this.getPromotionProductByBarcode(e.idProduct);

      listProduct.push({
        idProduct: e.idProduct,
        quantity: e.quantity,
        sizeProduct: e.sizeProduct,
        price: +this.products[index].price - +priceDiscount,
        pricePromotion: '0'
      });
    })

    const params: IOrderSaveParams = {
      paymentMethod: 'onDeliveried',
      address: {
        street: this.userInfo.street,
        ward: this.userInfo.ward,
        district: this.userInfo.district,
        city: this.userInfo.city, 
      },
      currentStatus: 'create',
      listProduct: listProduct
    }

    this.orderService.save(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IOrderSaveResponse>) => 
          this.onSaveOrderSuccess(response), 
        (response: HttpResponse<IOrderSaveResponse>) => 
          this.onSaveOrderFail(response), 
      )
  }

  public onSaveOrderSuccess(res: HttpResponse<IOrderSaveResponse>) {
    console.log(res);

    this.notificationService.success(
      '', 
      'Thanh toán giỏ hàng thàng công!', 
      { nzPlacement: 'topRight' }
    );
    this.route.navigate(['/']);
  }

  public onSaveOrderFail(res: HttpResponse<IOrderSaveResponse>) {
    console.log(res);
  }
}
