import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { Observable } from 'rxjs';
import { IProductGetParams } from '../interfaces/api/parameters/product-get-params';
import { IProductGetResponse } from '../interfaces/api/response/product-get-response';
import { IProductGetByBarcodeParams } from '../interfaces/api/parameters/product-get-by-barcode-params';
import { IProductGetByBarcodeResponse } from '../interfaces/api/response/product-get-by-barcode-response';
import { IProductGetByCategoryParams } from '../interfaces/api/parameters/product-get-by-category-params';
import { IProductGetByCategoryResponse } from '../interfaces/api/response/product-get-by-category-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public get(params: IProductGetParams): Observable<HttpResponse<IProductGetResponse>> {
    return this.http.get<IProductGetResponse>(
      this.apiConfigToken.product.get, {
        params: {
          page: params.page, 
          size: params.size, 
        }, 
        observe: 'response', 
      }
    )
  }

  public getByBarcode(params: IProductGetByBarcodeParams): 
    Observable<HttpResponse<IProductGetByBarcodeResponse>> {
    return this.http.get<IProductGetByBarcodeResponse>(
      this.apiConfigToken.product.getByBarcode, {
        params: {
          id: params.barcode
        }, 
        observe: 'response', 
      }
    )
  }

  public getByCategory(params: IProductGetByCategoryParams): 
    Observable<HttpResponse<IProductGetByCategoryResponse>> {
    return this.http.post<IProductGetByCategoryResponse>(
      this.apiConfigToken.product.getByCategory, params, {
        params: {
          page: params.page
        }, 
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
