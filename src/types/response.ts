import { CodeType, SubscribeType, ProductType, UserType } from './data';

export type SignUpResponse = {
  email: string;
  username: string;
  token: string;
};

export type PayForProductResponse = {
  subscribe: SubscribeType;
};

export type SignInResponse = {
  token: string;
  user: UserType;
};

export type UpdatePasswordResponse = UserType;

export type UpdatePersonalDataResponse = UserType;

export type GetMeResponse = UserType;

export type FetchProductsResponse = ProductType[];

export type FetchCodesResponse = CodeType[];

export type FetchSubscribesResponse = SubscribeType[];
