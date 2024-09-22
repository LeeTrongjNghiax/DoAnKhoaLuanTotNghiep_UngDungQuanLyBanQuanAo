import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IApiConfig } from '../../../interfaces/api-config.interface';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { catchError, Observable, ObservableInput, throwError } from 'rxjs';
import { IUserLoginParams } from '../interfaces/api/parameters/user-login-params.interface';
import { IUserLoginResponse } from '../interfaces/api/response/user-login-response.interface';
import { IUserGetAllResponse } from '../interfaces/api/response/user-get-all-response';
import { IUserRegisterParams } from '../interfaces/api/parameters/user-register-params';
import { IUserRegisterResponse } from '../interfaces/api/response/user-register-response';
import { IUserChangePasswordParams } from '../interfaces/api/parameters/user-change-password-params';
import { IUserChangePasswordResponse } from '../interfaces/api/response/user-change-password-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public login(params: IUserLoginParams): 
    Observable<HttpResponse<IUserLoginResponse>> {
    return this.http.post<IUserLoginResponse>(
      this.apiConfigToken.user.login, params, { observe: 'response' }
    )
      .pipe(catchError(this.errorHandler))
  }

  public get(): Observable<HttpResponse<IUserGetAllResponse>> {
    return this.http.get<IUserGetAllResponse>(
      this.apiConfigToken.user.getAll, { observe: 'response' }
    )
      .pipe(catchError(this.errorHandler))
  }

  public register(params: IUserRegisterParams): 
    Observable<HttpResponse<IUserRegisterResponse>> {
    return this.http.post<IUserRegisterResponse>(
      this.apiConfigToken.user.register, params, { observe: 'response' }
    )
      .pipe(catchError(this.errorHandler))
  }

  public forgetPassword(params: IUserChangePasswordParams): 
    Observable<HttpResponse<IUserChangePasswordResponse>> {
    return this.http.post<IUserChangePasswordResponse>(
      this.apiConfigToken.user.forgetPassword, params, { observe: 'response' }
    )
      .pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse): ObservableInput<any> {
    console.log(error);
    return throwError(`Error: ${error.message}`)
  }
  
  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
