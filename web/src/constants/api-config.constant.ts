import { environment } from "../environments/environment";
import { IApiConfig } from "../interfaces/api-config.interface";

export const API_CONFIG: IApiConfig = {
  user: {
    login: `${environment.url}/login`, 
  }
}