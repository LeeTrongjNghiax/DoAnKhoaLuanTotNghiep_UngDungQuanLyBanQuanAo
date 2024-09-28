import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { IProductGetParams } from '../../core/interfaces/api/parameters/product-get-params';
import { HttpResponse } from '@angular/common/http';
import { IProductGetResponse } from '../../core/interfaces/api/response/product-get-response';
import { IProductResponse } from '../../core/interfaces/api/response/product-response';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ProductItemComponent, NzBreadCrumbModule, RouterLink, NgFor],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit, OnDestroy {
  @Input() label: string = "Label";
  public destroy = new Subject<void>();
  public products: IProductResponse[] = [];

  public constructor (
    private productService: ProductService, 
  ) {}

  public ngOnInit(): void {
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

  public onGetProductSuccess(response: HttpResponse<IProductGetResponse>) {
    this.products = response.body?.mess || [];
  }
  
  public onGetProductFail(response: HttpResponse<IProductGetResponse>) {
    console.log(response);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
