export type UserType = {
  id: number;
  email: string;
  username: string;
  subscribes: SubscribeType[];
  codes: CodeType[];
};

export type RegisterResponse = {
  email: string;
  username: string;
  token: string;
};

export type LoginResponse = {
  token: string;
  user: UserType;
};

export type SubscribeType = {
  productId: number;
  subscribeId: number;
};

export type CodeType = {
  id: number;
  code: string;
  origin: string;
  status: string;
  subscribeId: number;
  subscribe: string;
  userId: number;
  user: string;
};

export type ProductType = {
  id: number;
  sitesCount: number;
  name: string;
  prices: PriceProductType;
};

export type PriceProductType = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};
