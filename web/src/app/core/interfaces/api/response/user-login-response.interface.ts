import { EUserGender } from "../../../../../enums/user-gender.enum";

export interface IUserLoginResponse {
  dataUser: {
    id: number, 
    avatar: string, 
    name: string, 
    phone: string, 
    email: string, 
    gender: EUserGender, 
    birthday: Date, 
  }, 
  dataToken: string, 
  status: number, 
}
