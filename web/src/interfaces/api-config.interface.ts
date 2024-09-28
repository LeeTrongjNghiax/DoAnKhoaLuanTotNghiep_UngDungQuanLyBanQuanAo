export interface IApiConfig {
  user: {
    login: string, 
    getAll: string, 
    register: string, 
    forgetPassword: string, 
  }, 
  product: {
    get: string, 
    getByBarcode: string, 
  }, 
  sendOtp: string, 
  validOtp: string, 
}