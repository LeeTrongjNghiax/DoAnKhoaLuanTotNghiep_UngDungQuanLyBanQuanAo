export interface IUserUpdateResponse {
  id: string, 
  avatar: string, 
  name: string, 
  phone: string, 
  email: string, 
  gender: string, 
  birthday: Date, 
  status: string, 
  role: string, 
  address?: {
    street: string, 
    ward: string, 
    district: string, 
  }
}
