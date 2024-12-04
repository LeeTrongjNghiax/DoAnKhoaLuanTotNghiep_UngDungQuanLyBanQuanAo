import { IProductDetailResponse } from "./product-detail-response"
import { IProductResponse } from "./product-response"

export interface IProductGetByBarcodeResponse {
  // data: {
  //   product: IProductResponse, 
  //   productDetail: IProductDetailResponse[], 
  // } 
  data: IProductResponse
}
