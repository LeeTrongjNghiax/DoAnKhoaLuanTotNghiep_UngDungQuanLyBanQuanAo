import { IPromotionProductProductItemResponse } from "./promotion-product-product-item-response";

export interface IPromotionProductResponse {
  name: string, 
  description: string, 
  timeCreate: Date, 
  timeEnd: Date, 
  listPromotionProduct: IPromotionProductProductItemResponse[]
}
