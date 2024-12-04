import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ProductCatergoryComponent } from './components/product-catergory/product-catergory.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { ProductSectionComponent } from '../components/product-section/product-section.component';
import { BreadcrumbComponent } from "../../shared/components/breadcrumb/breadcrumb.component";
import { ProductService } from '../../core/services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IProductGetResponse } from '../../core/interfaces/api/response/product-get-response';
import { IProductGetParams } from '../../core/interfaces/api/parameters/product-get-params';
import { ICategoryGetResponse } from '../../core/interfaces/api/response/category-get-response';
import { ICategoryResponse } from '../../core/interfaces/api/response/category-response';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    NzCarouselModule,
    NzBreadCrumbModule,
    RouterLink,
    ProductCatergoryComponent,
    NzTabsModule,
    TButtonComponent,
    ProductSectionComponent,
    BreadcrumbComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  @Input() label: string = "Label";
  public banners = [
    [
      {
        image: "./data/images/banners/1.jpg", 
        link: "/product-list", 
      }, 
      {
        image: "./data/images/banners/2.jpg", 
        link: "/product-list/2", 
      }, 
      {
        image: "./data/images/banners/3.jpg", 
        link: "/product-list/3", 
      }, 
    ], 
    [
      {
        image: "./data/images/banners/4.jpg", 
        link: "/product-list/4", 
      }, 
      {
        image: "./data/images/banners/5.jpg", 
        link: "/product-list/5", 
      }, 
      {
        image: "./data/images/banners/6.jpg", 
        link: "/product-list/6", 
      }, 
    ], 
    [
      {
        image: "./data/images/banners/7.jpg", 
        link: "/product-list/7", 
      }, 
    ], 
  ];

  public destroy = new Subject<void>();
  public errorMessage: string = '';
  public isLoading: boolean = false;
  public products!: [];
  public categories!: ICategoryResponse[];

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService, 
    private categoryService: CategoryService, 
  ) {}

  public ngOnInit(): void {
    this.errorMessage = '';
    this.isLoading = true;

    const params: IProductGetParams = {
      page: '1',
      size: '10'
    }

    this.categoryService.get()
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (response: HttpResponse<ICategoryGetResponse>) => 
          this.onGetCategorySuccess(response), 
        (response: HttpResponse<ICategoryGetResponse>) => 
          this.onGetCategoryFail(response), 
      )
  }

  public onGetCategorySuccess(res: HttpResponse<ICategoryGetResponse>) {
    this.isLoading = false;

    if (res.body?.data) {
      this.categories = res.body.data
    }
  }
  
  public onGetCategoryFail(res: HttpResponse<ICategoryGetResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
