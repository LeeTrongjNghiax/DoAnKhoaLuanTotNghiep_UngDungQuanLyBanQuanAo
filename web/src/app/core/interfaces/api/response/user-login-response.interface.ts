import { IHttpResponse } from "./http-response";

export interface IUserLoginResponse extends IHttpResponse {
  data: {
    token?: string
    idUser: string
  }
}
