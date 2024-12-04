import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TNumberFieldComponent } from '../../../../shared/components/number-field/number-field.component';
import { IProductResponse } from '../../../../core/interfaces/api/response/product-response';
import data from '../../../../../../public/data';
import { ICartItemResponse } from '../../../../core/interfaces/api/response/cart-item-response';
import { FormatCurrencyPipe } from '../../../../shared/pipes/format-currency.pipe';
import { IUserGetByTokenParams } from '../../../../core/interfaces/api/parameters/user-get-by-token-params';
import { UserService } from '../../../../core/services/user.service';
import { CartService } from '../../../../core/services/cart.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IUserGetByTokenResponse } from '../../../../core/interfaces/api/response/user-get-by-token-response';
import { ICartGetByIdUserParams } from '../../../../core/interfaces/api/parameters/cart-get-by-id-user-params';
import { ICartGetByIdUserResponse } from '../../../../core/interfaces/api/response/cart-get-by-id-user-response';
import { ProductService } from '../../../../core/services/product.service';
import { IProductGetByBarcodeResponse } from '../../../../core/interfaces/api/response/product-get-by-barcode-response';
import { IProductGetByBarcodeParams } from '../../../../core/interfaces/api/parameters/product-get-by-barcode-params';
import { ICartItem } from './interfaces/cart-item.interface';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICartUpdateParams } from '../../../../core/interfaces/api/parameters/cart-update-params';
import { ICartResponse } from '../../../../core/interfaces/api/response/cart-response';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [
    AngularSvgIconModule, 
    TNumberFieldComponent, 
    FormatCurrencyPipe, 
    NzPopconfirmModule, 
  ],
  providers: [FormatCurrencyPipe], 
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: ICartItemResponse;
  @Output() changeQuantityEventEmitter: EventEmitter<ICartItem> 
    = new EventEmitter<ICartItem>;
  public product!: IProductResponse | undefined;
  public destroy = new Subject<void>();
  public quantity: number = 1;
  public userId: string = '';
  public cart!: ICartResponse;

  constructor(
    private productService: ProductService, 
    private userService: UserService, 
    private cartService: CartService, 
    private nzMessageService: NzMessageService, 
  ) {}

  public ngOnInit(): void {
    const productParams: IProductGetByBarcodeParams = {
      barcode: this.cartItem.idProduct
    }

    const userParams: IUserGetByTokenParams = {
      token: localStorage.getItem('token') || ''
    }

    this.productService.getByBarcode(productParams)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IProductGetByBarcodeResponse>) => 
          this.onGetProductByBarcodeSuccess(response), 
        (response: HttpResponse<IProductGetByBarcodeResponse>) => 
          this.onGetProductByBarcodeFail(response), 
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

  public onGetProductByBarcodeSuccess(res: HttpResponse<IProductGetByBarcodeResponse>) {
    if (res.body) {
      this.product = res.body.data;
    }
  }

  public onGetProductByBarcodeFail(res: HttpResponse<IProductGetByBarcodeResponse>) {
    console.log(res);
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
      this.quantity = +this.cartItem.quantity;
    }
  }

  public onGetCartByIdUserFail(res: HttpResponse<ICartGetByIdUserResponse>) {
    console.log(res);
  }

  public onChangeQuantity(e: number) {
    this.quantity = e;
    this.changeQuantityEventEmitter.emit({
      id: this.cartItem.idProduct, 
      quantity: e, 
    });
  }

  public handleDelete() {
    const deleteItemIndex = this.cart.listCartItem.findIndex(
      e => e.idProduct === this.product?.barcode
    );

    this.cart.listCartItem.splice(deleteItemIndex, 1);

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
      )

    this.nzMessageService.info('Xóa sản phẩm thành công')
    window.location.reload();
  }

  public onUpdateCartSuccess(res: HttpResponse<ICartResponse>) {
    console.log(res);
  }

  public onUpdateCartFail(res: HttpResponse<ICartResponse>) {
    console.log(res);
  }
}
