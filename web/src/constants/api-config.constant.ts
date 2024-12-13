import { environment } from "../environments/environment";
import { IApiConfig } from "../interfaces/api-config.interface";

export const API_CONFIG: IApiConfig = {
  user: {
    login: `${environment.url}/api/login`,
    getAll: `${environment.url}/api/accounts/`,
    register: `${environment.url}/api/register/`,
    forgetPassword: `${environment.url}/api/forget-password/`,
    getByToken: `${environment.url}/api/auth/authenticate`,
    get: `${environment.url}/api/users/`,
    update: `${environment.url}/api/users/`,
  },
  cart: {
    getByIdUser: `${environment.url}/api/carts/id-user`,
    update: `${environment.url}/api/carts/`,
  },
  order: {
    save: `${environment.url}/api/order/save/`,
    getByUser: `${environment.url}/api/orders/`,
    update: `${environment.url}/api/orders/`,
  },
  orderDetail: {
    getByOrder: `${environment.url}/api/order-details/id-order/`,
  },
  orderStatus: {
    update: `${environment.url}/api/order-statuss/`,
    getByOrderId: `${environment.url}/api/order-statuss/id`,
  },
  promotionProduct: {
    get: `${environment.url}/api/promotion-products/`,
    getProduct: `${environment.url}/api/promotion-products/barcode/`,
  }, 
  product: {
    get: `${environment.url}/api/products/`,
    getByBarcode: `${environment.url}/api/product/`,
    getByCategory: `${environment.url}/api/products/category`,
  },
  productVariant: {
    getByBarcode: `${environment.url}/api/product-variants/barcode`,
  },
  category: {
    get: `${environment.url}/api/categories/`,
    getById: `${environment.url}/api/category/id`,
  },
  sendOtp: `${environment.url}/api/send-otp/`,
  validOtp: `${environment.url}/api/valid-otp/`,
}