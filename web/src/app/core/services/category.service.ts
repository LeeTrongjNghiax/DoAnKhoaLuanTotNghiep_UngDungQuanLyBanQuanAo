import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { ICategoryGetResponse } from '../interfaces/api/response/category-get-response';
import { ICategoryGetByIdParams } from '../interfaces/api/parameters/category-get-by-id-params';
import { ICategoryGetByIdResponse } from '../interfaces/api/response/category-get-by-id-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public get(): Observable<HttpResponse<ICategoryGetResponse>> {
    return this.http.get<ICategoryGetResponse>(
      this.apiConfigToken.category.get, {
        observe: 'response', 
      }
    )
  }

  public getById(params: ICategoryGetByIdParams): 
    Observable<HttpResponse<ICategoryGetByIdResponse>> {
    return this.http.post<ICategoryGetByIdResponse>(
      this.apiConfigToken.category.getById, params, {
        observe: 'response', 
      }
    )
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
