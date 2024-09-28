import { EUserGender } from "../../../../../enums/user-gender.enum";
import { IHttpResponse } from "./http-response";

export interface IUserLoginResponse extends IHttpResponse {
  dataUser: {
    id: number, 
    avatar: string, 
    name: string, 
    phone: string, 
    email: string, 
    gender: EUserGender, 
    birthday: Date, 
  }, 
  dataToken: string, 
  status: number, 
}
