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

  public getCategoryImage(id: string) {
    switch (id) {
      case `5898bb73-5494-4f09-9332-ca482b950e10`:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_6_img.png?1734038584985`;
      case `9bac8da9-59ed-4f53-bb29-b627fc9a961d`:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_5_img.png?1734038584985`;
      case `7a0e5933-816f-412e-a00d-4b3f22878bb7`:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_4_img.png?1734038584985`;
      case `bb3f0f96-034a-423d-874f-711b79c8f706`:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_1_img.png?1734038584985`;
      case `9a9eacd1-160c-447b-8e95-0276452db0f3`:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_5_img.png?1734038584985`;
      case `4a1b1185-996b-462b-8d1c-5cc08ea53974`:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_3_img.png?1734038584985`;
      default:
        return `https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_5_img.png?1734038584985`;
    }
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
