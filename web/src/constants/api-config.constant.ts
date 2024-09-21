import { environment } from "../environments/environment";
import { IApiConfig } from "../interfaces/api-config.interface";

export const API_CONFIG: IApiConfig = {
  user: {
    login: `${environment.url}/api/login/`, 
    getAll: `${environment.url}/api/accounts/`,
    register: `${environment.url}/api/register/`,
  }, 
  sendOtp: `${environment.url}/api/send-otp/`, 
}