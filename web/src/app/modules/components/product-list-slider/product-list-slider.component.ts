import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import data from '../../../../../public/data';
import { IProductGetParams } from '../../../core/interfaces/api/parameters/product-get-params';
import { ProductService } from '../../../core/services/product.service';
import { IProductGetResponse } from '../../../core/interfaces/api/response/product-get-response';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { IProductResponse } from '../../../core/interfaces/api/response/product-response';

@Component({
  selector: 'app-product-list-slider',
  standalone: true,
  imports: [NgFor, RouterLink, ProductItemComponent],
  templateUrl: './product-list-slider.component.html',
  styleUrl: './product-list-slider.component.scss'
})
export class ProductListSliderComponent implements OnInit, OnDestroy {

  public destroy = new Subject<void>();
  public errorMessage: string = '';
  public isLoading: boolean = false;
  public products!: IProductResponse[];
  // public products = data.products;

  public ngOnInit(): void {
    this.errorMessage = '';
    this.isLoading = true;

    const params: IProductGetParams = {
      page: '1',
      size: '10'
    }

    this.productService.get(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<IProductGetResponse>) => 
          this.onGetProductSuccess(response), 
        (response: HttpResponse<IProductGetResponse>) => 
          this.onGetProductFail(response), 
      )
  }

  public onGetProductSuccess(res: HttpResponse<IProductGetResponse>) {
    if (res.body?.data)
      this.products = res.body?.data;
  }
  
  public onGetProductFail(res: HttpResponse<IProductGetResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
  }

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
  ) {
    route.params.subscribe(params => {
      // console.log(params["idCategory"]);
    })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
