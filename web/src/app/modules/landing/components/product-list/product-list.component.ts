import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductResponse } from '../../../../core/interfaces/api/response/product-response';
import { IProductGetParams } from '../../../../core/interfaces/api/parameters/product-get-params';
import { HttpResponse } from '@angular/common/http';
import { IProductGetResponse } from '../../../../core/interfaces/api/response/product-get-response';
import { ProductService } from '../../../../core/services/product.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterLink, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {
  public destroy = new Subject<void>();
  public products: IProductResponse[] = [
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
    {
      barcode: '1',
      description: 'Áo thun trắng tối giản',
      gender: '',
      idCatergory: 0,
      imageAlbum: [ 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
        "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/img-2852-8e23801e-3d9b-403b-b50a-744b6595e68e.jpg?v=1726134406623", 
      ],
      name: 'Áo sơ mi tay ngắn Regular Grater',
      price: 100000
    }, 
  ];
  public errorMessage: string = '';
  public isLoading: boolean = false;

  public ngOnInit(): void {
    this.errorMessage = '';
    this.isLoading = true;

    const params: IProductGetParams = {
      page: '1',
      size: '10'
    }

    // this.productService.get(params)
    //   .pipe(takeUntil(this.destroy))
    //   .subscribe(
    //     (response: HttpResponse<IProductGetResponse>) => 
    //       this.onGetProductSuccess(response), 
    //     (response: HttpResponse<IProductGetResponse>) => 
    //       this.onGetProductFail(response), 
    //   )
  }

  public onGetProductSuccess(res: HttpResponse<IProductGetResponse>) {
    this.isLoading = false;
    this.products = res.body?.mess || [];
  }
  
  public onGetProductFail(res: HttpResponse<IProductGetResponse>) {
    this.isLoading = false;
    this.errorMessage = res.statusText;
  }

  public constructor (
    private productService: ProductService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
