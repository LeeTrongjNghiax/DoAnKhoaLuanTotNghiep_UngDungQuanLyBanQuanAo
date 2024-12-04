import { ICartItemResponse } from "../response/cart-item-response";

export interface ICartUpdateParams {
  idUser: string, 
  id: string, 
  listCartItem: ICartItemResponse[], 
}
