import { IProductDetailResponse } from "./product-detail-response"
import { IProductResponse } from "./product-response"

export interface IProductGetByBarcodeResponse {
  mess: {
    product: IProductResponse, 
    productDetail: IProductDetailResponse[], 
  } 
}
