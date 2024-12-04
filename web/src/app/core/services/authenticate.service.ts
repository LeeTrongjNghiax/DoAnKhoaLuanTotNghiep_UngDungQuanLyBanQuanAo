import { Inject, Injectable } from '@angular/core';
import { IUserLoginResponse } from '../interfaces/api/response/user-login-response.interface';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG_TOKEN } from '../../../providers/api.provider';
import { IApiConfig } from '../../../interfaces/api-config.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public authenticate(data: IUserLoginResponse) {
    localStorage.setItem("jwt", data.data.token || '');
  }

  public getJwt() {
    let x = document.cookie;
  }

  constructor(
    private http: HttpClient, 
    @Inject(API_CONFIG_TOKEN) private apiConfigToken: IApiConfig
  ) {}
}
