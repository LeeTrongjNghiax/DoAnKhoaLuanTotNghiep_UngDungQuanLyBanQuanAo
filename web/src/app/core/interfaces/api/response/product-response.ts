import { IProductDetailResponse } from "./product-detail-response";

export interface IProductResponse {
  barcode: string, 
  description: string, 
  gender: string, 
  idCatergory: number, 
  imageAlbum: string[], 
  name: string, 
  price: number, 
  details: IProductDetailResponse[], 
}
