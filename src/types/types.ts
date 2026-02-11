export interface IProduct {
  id: number;
  brand: string;
  model: string;
  price: number;
  image: string[];
  sizes: number[];
  colors: string[];
  date: string;
  sale: number;
  category: string;
}

export interface IBasket {
  product: IProduct;
  color: string;
  size: number;
}

export interface IUserContacts {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
}

export interface IValidation {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  address: boolean;
  phone: boolean;
  gender?: boolean;
  password?: boolean;
}

export interface IValidationRegister {
  email: boolean;
  firstName: boolean;
  lastName: boolean;
  gender: boolean;
  password: boolean;
}

export interface IValidationRegisterProops {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  pass: string;
  repPass: string;
}

export interface IUserData {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  pass: string;
  address: string;
  phone: string;
}
