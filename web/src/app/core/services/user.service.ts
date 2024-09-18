import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { Observable } from 'rxjs';
import { IUserLoginParams } from '../../../interfaces/api/parameters/user-login-params.interface';
import { IUserLoginResponse } from '../../../interfaces/api/response/user-login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}

  public login(params: IUserLoginParams): Observable<IUserLoginResponse> {
    return this.http.post<IUserLoginResponse>(
      this.apiConfigToken.user.login, params
    )
  }
}
