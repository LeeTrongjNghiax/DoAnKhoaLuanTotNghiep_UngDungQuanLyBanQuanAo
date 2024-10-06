import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ProductCatergoryComponent } from './components/product-catergory/product-catergory.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ProductListComponent } from './components/product-list/product-list.component';

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
    ProductListComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
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

  public productCategories = [
    {
      label: "Áo thun", 
      quantity: 40, 
      image: "https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_1_img.png?1727368308550", 
      link: "", 
    }, 
    {
      label: "Áo polo", 
      quantity: 40, 
      image: "https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_2_img.png?1727368308550", 
      link: "", 
    }, 
    {
      label: "Áo sơ mi", 
      quantity: 40, 
      image: "https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_3_img.png?1727368308550", 
      link: "", 
    }, 
    {
      label: "Áo khoác", 
      quantity: 40, 
      image: "https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_4_img.png?1727368308550", 
      link: "", 
    }, 
    {
      label: "Quần jean", 
      quantity: 40, 
      image: "https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_5_img.png?1727368308550", 
      link: "", 
    }, 
    {
      label: "Quần tây", 
      quantity: 40, 
      image: "https://bizweb.dktcdn.net/thumb/large/100/396/594/themes/937450/assets/season_coll_6_img.png?1727368308550", 
      link: "", 
    }, 
  ];
}
