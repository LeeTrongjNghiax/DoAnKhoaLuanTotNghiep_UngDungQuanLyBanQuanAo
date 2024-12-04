import { IOrderItemResponse } from "../response/order-item-response";

export interface IOrderSaveParams {
  paymentMethod: string, 
  address: {
    street: string, 
    ward: string, 
    district: string, 
    city: string, 
  }, 
  currentStatus: string, 
  listProduct: IOrderItemResponse[], 
}
