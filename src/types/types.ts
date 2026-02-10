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
}
