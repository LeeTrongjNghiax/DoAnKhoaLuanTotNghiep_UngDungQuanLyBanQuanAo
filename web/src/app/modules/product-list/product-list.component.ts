import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { IBreadcrumb } from '../../shared/components/breadcrumb/types/breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { TCheckboxWithLabelComponent } from '../../shared/components/checkbox-with-label/checkbox-with-label.component';
import data from '../../../../public/data';
import { NgFor } from '@angular/common';
import { ProductItemComponent } from '../components/product-list-slider/components/product-item/product-item.component';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IProductResponse } from '../../core/interfaces/api/response/product-response';
import { ICategoryResponse } from '../../core/interfaces/api/response/category-response';
import { ProductService } from '../../core/services/product.service';
import { IProductGetByCategoryParams } from '../../core/interfaces/api/parameters/product-get-by-category-params';
import { IProductGetByCategoryResponse } from '../../core/interfaces/api/response/product-get-by-category-response';
import { CategoryService } from '../../core/services/category.service';
import { ICategoryGetByIdParams } from '../../core/interfaces/api/parameters/category-get-by-id-params';
import { ICategoryGetByIdResponse } from '../../core/interfaces/api/response/category-get-by-id-response';
import { IProductGetParams } from '../../core/interfaces/api/parameters/product-get-params';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    TCheckboxWithLabelComponent,
    NgFor,
    ProductItemComponent
],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[] = [
    {label: 'Trang chủ', link: '/'}, 
    {label: 'Danh sách sản phẩm', link: '/product-list'}, 
  ];
  public destroy = new Subject<void>();
  public errorMessage: string = '';
  public isLoading: boolean = false;
  public products!: IProductResponse[];
  public categories!: ICategoryResponse[];
  public categoryId: string = "";

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private categoryService: CategoryService, 
  ) {
    route.params.subscribe(params => {
      this.categoryId = params["id"]
    })
  }

  public ngOnInit(): void {
    this.errorMessage = '';
    this.isLoading = true;

    if (this.categoryId) {
      const categoryParams: ICategoryGetByIdParams = {
        id: this.categoryId
      }
      this.categoryService.getById(categoryParams)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<ICategoryGetByIdResponse>) => 
            this.onGetCategorySuccess(response), 
          (response: HttpResponse<ICategoryGetByIdResponse>) => 
            this.onGetCategoryFail(response), 
        )

      const params: IProductGetByCategoryParams = {
        idCategory: this.categoryId, 
        page: 1
      }
      this.productService.getByCategory(params)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IProductGetByCategoryResponse>) => 
            this.onGetProductSuccess(response), 
          (response: HttpResponse<IProductGetByCategoryResponse>) => 
            this.onGetProductFail(response), 
        )
    }
    else {
      const params: IProductGetParams = {
        page: '1',
        size: '10'
      }
      this.productService.get(params)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          (response: HttpResponse<IProductGetByCategoryResponse>) => 
            this.onGetProductSuccess(response), 
          (response: HttpResponse<IProductGetByCategoryResponse>) => 
            this.onGetProductFail(response), 
        )
    }

  }

  public onGetProductSuccess(res: HttpResponse<IProductGetByCategoryResponse>) {
    this.isLoading = false;

    if (res.body?.data) {
      this.products = res.body.data;
    }
  }
  
  public onGetProductFail(res: HttpResponse<IProductGetByCategoryResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
  }

  public onGetCategorySuccess(res: HttpResponse<ICategoryGetByIdResponse>) {
    this.isLoading = false;

    if (res.body?.data) {
      this.breadcrumbs.push(
        {label: res.body.data.name, link: `/product-list/${res.body.data.id}`}, 
      )
    }
  }
  
  public onGetCategoryFail(res: HttpResponse<ICategoryGetByIdResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
