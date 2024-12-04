export interface IApiConfig {
  user: {
    login: string, 
    get: string, 
    getAll: string, 
    getByToken: string, 
    register: string, 
    forgetPassword: string, 
  }, 
  cart: {
    getByIdUser: string, 
    update: string, 
  }, 
  order: {
    save: string, 
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