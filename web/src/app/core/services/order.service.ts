import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IOrderSaveParams } from '../interfaces/api/parameters/order-save-params';
import { Observable } from 'rxjs';
import { IOrderSaveResponse } from '../interfaces/api/response/order-save-response';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public save(params: IOrderSaveParams): 
    Observable<HttpResponse<IOrderSaveResponse>> {
    return this.http.post<IOrderSaveResponse>(
      this.apiConfigToken.order.save, params, {
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
