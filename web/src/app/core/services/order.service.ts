import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IOrderSaveParams } from '../interfaces/api/parameters/order-save-params';
import { Observable } from 'rxjs';
import { IOrderSaveResponse } from '../interfaces/api/response/order-save-response';
import { IOrderGetByUserResponse } from '../interfaces/api/response/order-get-by-user-response';
import { IOrderUpdateByOrderIdAndUserIdParams } from '../interfaces/api/parameters/order-update-by-order-id-and-user-id-params';
import { IOrderUpdateByOrderIdAndUserIdResponse } from '../interfaces/api/response/order-update-by-order-id-and-user-id-response';

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

  public getByUser(id: string): 
    Observable<HttpResponse<IOrderGetByUserResponse>> {
    return this.http.get<IOrderGetByUserResponse>(
      this.apiConfigToken.order.getByUser, {
        params: {
          id: id
        }, 
        observe: 'response', 
      }
    )
  }

  public update(params: IOrderUpdateByOrderIdAndUserIdParams): 
    Observable<HttpResponse<IOrderUpdateByOrderIdAndUserIdResponse>> {
    return this.http.put<IOrderUpdateByOrderIdAndUserIdResponse>(
      this.apiConfigToken.order.getByUser, params, {
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
