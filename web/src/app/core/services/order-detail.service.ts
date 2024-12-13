import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { Observable } from 'rxjs';
import { IOrderDetailGetByOrderResponse } from '../interfaces/api/response/order-detail-get-by-order-response';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  public getByOrder(id: string): 
    Observable<HttpResponse<IOrderDetailGetByOrderResponse>> {
    return this.http.get<IOrderDetailGetByOrderResponse>(
      this.apiConfigToken.orderDetail.getByOrder, {
        params: {
          id: id
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
