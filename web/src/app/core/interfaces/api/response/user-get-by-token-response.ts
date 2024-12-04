import { IHttpResponse } from "./http-response";

export interface IUserGetByTokenResponse extends IHttpResponse {
  data: string;
}
