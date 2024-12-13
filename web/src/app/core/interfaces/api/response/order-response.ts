export interface IOrderResponse {
  idOrder: string, 
  idUser: string, 
  dateTime: Date, 
  currentStatus: string, 
  paymentMethod: string, 
  address: {
    city: string, 
    ward: string, 
    street: string, 
    district: string, 
  }, 
}
