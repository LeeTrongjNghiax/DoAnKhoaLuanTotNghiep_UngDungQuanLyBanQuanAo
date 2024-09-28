import { environment } from "../environments/environment";
import { IApiConfig } from "../interfaces/api-config.interface";

export const API_CONFIG: IApiConfig = {
  user: {
    login: `${environment.url}/api/login/`,
    getAll: `${environment.url}/api/accounts/`,
    register: `${environment.url}/api/register/`,
    forgetPassword: `${environment.url}/api/forget-password/`,
  },
  product: {
    get: `${environment.url}/api/get-product/`,
    getByBarcode: `${environment.url}/api/product/`,
  }, 
  sendOtp: `${environment.url}/api/send-otp/`,
  validOtp: `${environment.url}/api/valid-otp/`,
}