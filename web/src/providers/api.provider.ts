import { InjectionToken } from "@angular/core";
import { IApiConfig } from "../interfaces/api-config.interface";

export const API_CONFIG_TOKEN = new InjectionToken<IApiConfig>('apiConfig')