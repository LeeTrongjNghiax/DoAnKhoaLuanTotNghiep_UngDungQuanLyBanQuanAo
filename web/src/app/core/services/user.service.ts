import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';

import { IApiConfig } from '../../../interfaces/api-config.interface';
import { IUserLoginParams } from '../interfaces/api/parameters/user-login-params.interface';
import { IUserLoginResponse } from '../interfaces/api/response/user-login-response.interface';
import { IUserGetAllResponse } from '../interfaces/api/response/user-get-all-response';
import { IUserRegisterParams } from '../interfaces/api/parameters/user-register-params';
import { IUserRegisterResponse } from '../interfaces/api/response/user-register-response';
import { IUserChangePasswordParams } from '../interfaces/api/parameters/user-change-password-params';
import { IUserChangePasswordResponse } from '../interfaces/api/response/user-change-password-response';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IUserGetByTokenParams } from '../interfaces/api/parameters/user-get-by-token-params';
import { IUserGetByTokenResponse } from '../interfaces/api/response/user-get-by-token-response';
import { IUserGetByIdResponse } from '../interfaces/api/response/user-get-by-id-response';
import { IUserUpdateParams } from '../interfaces/api/parameters/user-update-params';
import { IUserUpdateResponse } from '../interfaces/api/response/user-update-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public register(params: IUserRegisterParams): 
    Observable<HttpResponse<IUserRegisterResponse>> {
    return this.http.post<IUserRegisterResponse>(
      this.apiConfigToken.user.register, params, { observe: 'response' }
    )
  }

  public login(params: IUserLoginParams): 
    Observable<HttpResponse<IUserLoginResponse>> {
    return this.http.post<IUserLoginResponse>(
      this.apiConfigToken.user.login, params, { 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  public getById(id: string): Observable<HttpResponse<IUserGetByIdResponse>> {
    return this.http.get<IUserGetByIdResponse>(
      this.apiConfigToken.user.get, { 
        params: {
          id: id
        }, 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  public get(): Observable<HttpResponse<IUserGetAllResponse>> {
    return this.http.get<IUserGetAllResponse>(
      this.apiConfigToken.user.getAll, { 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  public getByToken(params: IUserGetByTokenParams): 
    Observable<HttpResponse<IUserGetByTokenResponse>> {
    return this.http.post<IUserGetByTokenResponse>(
      this.apiConfigToken.user.getByToken, params, { 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  public forgetPassword(params: IUserChangePasswordParams): 
    Observable<HttpResponse<IUserChangePasswordResponse>> {
    return this.http.post<IUserChangePasswordResponse>(
      this.apiConfigToken.user.forgetPassword, params, { 
        observe: 'response', 
        // withCredentials: true
      }
    )
  }

  public update(params: IUserUpdateParams): 
    Observable<HttpResponse<IUserUpdateResponse>> {
    return this.http.put<IUserUpdateResponse>(
      this.apiConfigToken.user.update, params, { 
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
