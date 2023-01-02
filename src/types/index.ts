export type UserType = {
  id: number;
  email: string;
  username: string;
  subscribes: PaymentType[];
  codes: CodeType[];
};

export type PaymentType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  status: string;
};

export type RegisterResponse = {
  email: string;
  username: string;
  token: string;
};

export type PaymentResponse = {
  subscribe: PaymentType;
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
  prices: PriceType[];
};

export type PriceType = {
  id: number;
  isActive: boolean;
  productId: number;
  price: string;
};
