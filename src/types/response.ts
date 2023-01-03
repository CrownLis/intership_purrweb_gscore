import { PaymentType, ProductType, UserType } from './data';

export type SignUpResponse = {
  email: string;
  username: string;
  token: string;
};

export type PayForProductResponse = {
  subscribe: PaymentType;
};

export type SignInResponse = {
  token: string;
  user: UserType;
};

export type GetMeResponse = UserType;

export type FetchProductsResponse = ProductType[];
