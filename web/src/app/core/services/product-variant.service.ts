import { Inject, Injectable } from '@angular/core';
import { IProductVariantGetByBarcodeResponse } from '../interfaces/api/response/product-variant-get-by-barcode-response';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IProductVariantGetByBarcodeParams } from '../interfaces/api/parameters/product-variant-get-by-barcode-params';

@Injectable({
  providedIn: 'root'
})
export class ProductVariantService {
  public getByBarcode(params: IProductVariantGetByBarcodeParams): Observable<HttpResponse<IProductVariantGetByBarcodeResponse>> {
    return this.http.post<IProductVariantGetByBarcodeResponse>(
      this.apiConfigToken.productVariant.getByBarcode, params, {
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
