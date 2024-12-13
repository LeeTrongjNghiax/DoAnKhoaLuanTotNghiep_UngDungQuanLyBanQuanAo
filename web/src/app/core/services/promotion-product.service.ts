import { Inject, Injectable } from '@angular/core';
import { IPromotionProductGetParams } from '../interfaces/api/parameters/promotion-product-get-params';
import { IPromotionProductGetResponse } from '../interfaces/api/response/promotion-product-get-response';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IPromotionProductProductItemResponse } from '../interfaces/api/response/promotion-product-product-item-response';
import { IPromotionProductGetByProductResponse } from '../interfaces/api/response/promotion-product-get-by-product-response';

@Injectable({
  providedIn: 'root'
})
export class PromotionProductService {
  public get(params: IPromotionProductGetParams): 
    Observable<HttpResponse<IPromotionProductGetResponse>> {
    return this.http.get<IPromotionProductGetResponse>(
      this.apiConfigToken.promotionProduct.get, {
        params: {
          type: params.type, 
          size: params.size, 
          page: params.page, 
        }, 
        observe: 'response', 
      }
    )
  }

  public getProduct(params: string): 
    Observable<HttpResponse<IPromotionProductGetByProductResponse>> {
    return this.http.get<IPromotionProductGetByProductResponse>(
      this.apiConfigToken.promotionProduct.getProduct, {
        params: {
          barcode: params
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
