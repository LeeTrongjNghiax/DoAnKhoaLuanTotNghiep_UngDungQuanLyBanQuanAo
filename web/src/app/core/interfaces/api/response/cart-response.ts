import { ICartItemResponse } from "./cart-item-response";

export interface ICartResponse {
  id: string, 
  idUSer: string, 
  listCartItem: ICartItemResponse[], 
  timeCreated: Date, 
  timeUpdated: Date, 
}
