import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { Observable } from 'rxjs';
import { ICartGetByIdUserResponse } from '../interfaces/api/response/cart-get-by-id-user-response';
import { ICartGetByIdUserParams } from '../interfaces/api/parameters/cart-get-by-id-user-params';
import { ICartUpdateParams } from '../interfaces/api/parameters/cart-update-params';
import { ICartResponse } from '../interfaces/api/response/cart-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public getByIdUser(params: ICartGetByIdUserParams): 
    Observable<HttpResponse<ICartGetByIdUserResponse>> {
    return this.http.post<ICartGetByIdUserResponse>(
      this.apiConfigToken.cart.getByIdUser, params, {
        observe: 'response', 
      }
    )
  }

  public update(params: ICartUpdateParams): 
    Observable<HttpResponse<ICartResponse>> {
    return this.http.patch<ICartResponse>(
      this.apiConfigToken.cart.update, params, {
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
