import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { Observable } from 'rxjs';
import { IProductGetParams } from '../interfaces/api/parameters/product-get-params';
import { IProductGetResponse } from '../interfaces/api/response/product-get-response';
import { IProductGetByBarcodeParams } from '../interfaces/api/parameters/product-get-by-barcode-params';
import { IProductGetByBarcodeResponse } from '../interfaces/api/response/product-get-by-barcode-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public get(params: IProductGetParams): Observable<HttpResponse<IProductGetResponse>> {
    return this.http.post<IProductGetResponse>(
      this.apiConfigToken.product.get, params, { 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  public getByBarcode(params: IProductGetByBarcodeParams): 
    Observable<HttpResponse<IProductGetByBarcodeResponse>> {
    return this.http.post<IProductGetByBarcodeResponse>(
      this.apiConfigToken.product.getByBarcode, params, { 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
