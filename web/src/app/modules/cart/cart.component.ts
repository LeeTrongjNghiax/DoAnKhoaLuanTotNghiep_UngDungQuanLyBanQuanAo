import { Component, OnInit } from '@angular/core';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TNumberFieldComponent } from '../../shared/components/number-field/number-field.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { ProductSectionComponent } from "../components/product-section/product-section.component";
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";
import { IBreadcrumb } from '../../shared/components/breadcrumb/types/breadcrumb';
import { IUserGetByTokenParams } from '../../core/interfaces/api/parameters/user-get-by-token-params';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../core/services/user.service';
import { CartService } from '../../core/services/cart.service';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../core/interfaces/api/response/user-get-by-token-response';
import { ICartGetByIdUserParams } from '../../core/interfaces/api/parameters/cart-get-by-id-user-params';
import { ICartGetByIdUserResponse } from '../../core/interfaces/api/response/cart-get-by-id-user-response';
import { ICartItem } from './components/cart-item/interfaces/cart-item.interface';
import { ICartResponse } from '../../core/interfaces/api/response/cart-response';
import { ProductService } from '../../core/services/product.service';
import { IProductGetByBarcodeParams } from '../../core/interfaces/api/parameters/product-get-by-barcode-params';
import { IProductGetByBarcodeResponse } from '../../core/interfaces/api/response/product-get-by-barcode-response';
import { FormatCurrencyPipe } from '../../shared/pipes/format-currency.pipe';
import { OrderService } from '../../core/services/order.service';
import { IOrderSaveParams } from '../../core/interfaces/api/parameters/order-save-params';
import { IOrderSaveResponse } from '../../core/interfaces/api/response/order-save-response';
import { IUserGetByIdResponse } from '../../core/interfaces/api/response/user-get-by-id-response';
import { IOrderItemResponse } from '../../core/interfaces/api/response/order-item-response';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TButtonComponent,
    TNumberFieldComponent,
    AngularSvgIconModule,
    CartItemComponent,
    TTextFieldComponent,
    ProductSectionComponent,
    BreadcrumbComponent, 
    FormatCurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [
    {label: 'Trang chủ', link: '/'}, 
    {label: 'Giỏ hàng', link: '/cart'}
  ];
  public destroy = new Subject<void>();
  public user!: IUserGetByIdResponse;
  public cart!: ICartResponse;
  public productPrices: {id: string, price: number}[] = [];

  constructor(
    private userService: UserService, 
    private cartService: CartService, 
    private productService: ProductService, 
    private orderService: OrderService, 
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

  public onGetUserByIdSuccess(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
    if (res.body) {
      this.user = res.body;
    }
  }

  public onGetUserByIdFail(res: HttpResponse<IUserGetByIdResponse>) {
    console.log(res);
  }

  public onGetUserByTokenFail(res: HttpResponse<IUserGetByTokenResponse>) {
    console.log(res);
  }

  public onGetCartByIdUserSuccess(res: HttpResponse<ICartGetByIdUserResponse>) {
    console.log(res.body?.data);

    if (res.body?.data) {
      this.cart = res.body.data;
    }

    console.log(this.cart);

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

  public onGetCartByIdUserFail(res: HttpResponse<ICartGetByIdUserResponse>) {
    console.log(res);
  }

  public onChangeProductQuantity(cartItem: ICartItem) {
    if (this.cart.listCartItem) {
      const indexProduct = this.cart.listCartItem.findIndex(e => e.idProduct === cartItem.id);
    this.cart.listCartItem[indexProduct].quantity = cartItem.quantity + '';
    }
  }

  public onGetProductByBarcodeSuccess(res: HttpResponse<IProductGetByBarcodeResponse>) {
    if (res.body) {
      this.productPrices.push({
        id: res.body.data.barcode, 
        price: res.body.data.price, 
      })
    }
  }

  public onGetProductByBarcodeFail(res: HttpResponse<IProductGetByBarcodeResponse>) {
    console.log(res);
  }

  public getTotal() {
    let amount = 0;

    if (this.cart.listCartItem) {
      for (let i = 0; i < this.cart.listCartItem.length; i++) {
        const indexProductPrice = this.productPrices.findIndex(
          e => e.id === this.cart.listCartItem[i].idProduct);

        const price = this.productPrices[indexProductPrice].price;
        const quantity = +this.cart.listCartItem[i].quantity;

        amount += price * quantity;
      }
    }

    return amount;
  }

  public onClickPay() {
    console.log("Paid");

    const listProduct: IOrderItemResponse[] = [];

    this.cart.listCartItem.map((e, index) => {
      listProduct.push({
        idProduct: e.idProduct,
        quantity: e.quantity,
        sizeProduct: e.sizeProduct,
        price: +this.productPrices[index].price,
        pricePromotion: '0'
      })
    })

    const params: IOrderSaveParams = {
      paymentMethod: 'card',
      address: {
        street: this.user.address?.street || '',
        ward: this.user.address?.ward || '',
        district: this.user.address?.state || '',
        city: this.user.address?.city || ''
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
  }

  public onSaveOrderFail(res: HttpResponse<IOrderSaveResponse>) {
    console.log(res);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
