export interface IApiConfig {
  user: {
    login: string, 
    get: string, 
    getAll: string, 
    getByToken: string, 
    register: string, 
    forgetPassword: string, 
    update: string, 
  }, 
  cart: {
    getByIdUser: string, 
    update: string, 
  }, 
  order: {
    save: string, 
    getByUser: string, 
    update: string, 
  }, 
  orderDetail: {
    getByOrder: string, 
  }, 
  orderStatus: {
    update: string, 
    getByOrderId: string, 
  }, 
  promotionProduct: {
    get: string, 
    getProduct: string, 
  }, 
  product: {
    get: string, 
    getByBarcode: string, 
    getByCategory: string, 
  }, 
  productVariant: {
    getByBarcode: string, 
  }, 
  category: {
    get: string, 
    getById: string, 
  }, 
  sendOtp: string, 
  validOtp: string, 
}