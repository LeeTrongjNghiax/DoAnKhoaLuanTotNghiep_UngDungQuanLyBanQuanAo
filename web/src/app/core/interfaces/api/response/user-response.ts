import { IHttpResponse } from "./http-response";

export interface IUserResponse extends IHttpResponse {
  id: string, 
  avatar: string, 
  name: string, 
  phone: string, 
  email: string, 
  gender: string, 
  birthday: Date, 
  timeCreate: Date, 
  shoppingPoint: number, 
  status: string, 
  role: string, 
  address?: {
    street: string, 
    ward: string, 
    city: string, 
    state: string, 
  }
}
