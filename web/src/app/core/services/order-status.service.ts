import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IOrderStatusUpdateParams } from '../interfaces/api/parameters/order-status-update-params';
import { IOrderStatusUpdateResponse } from '../interfaces/api/response/order-status-update-response';
import { IOrderStatusGetByOrderIdParams } from '../interfaces/api/parameters/order-status-get-by-order-params';
import { IOrderStatusGetByOrderIdResponse } from '../interfaces/api/response/order-status-get-by-order-id-response';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {
  public update(params: IOrderStatusUpdateParams): 
    Observable<HttpResponse<IOrderStatusUpdateResponse>> {
    return this.http.post<IOrderStatusUpdateResponse>(
      this.apiConfigToken.orderStatus.update, params, {
        observe: 'response', 
      }
    )
  }

  public getByOrderId(params: IOrderStatusGetByOrderIdParams): 
    Observable<HttpResponse<IOrderStatusGetByOrderIdResponse>> {
    return this.http.post<IOrderStatusGetByOrderIdResponse>(
      this.apiConfigToken.orderStatus.getByOrderId, params, {
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
