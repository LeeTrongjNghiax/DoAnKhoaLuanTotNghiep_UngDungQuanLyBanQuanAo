import { Injectable } from '@angular/core';
import { IUserLoginResponse } from '../interfaces/api/response/user-login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public authenticate(data: IUserLoginResponse) {
    document.cookie = `jwt=${data.dataToken}`
  }

  public getJwt() {
    let x = document.cookie;
  }

  constructor(
  ) {}
}
