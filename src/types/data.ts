export type UserType = {
  id: number;
  email: string;
  username: string;
};

export type SubscribeType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: number;
  currentPeriodEnd: number;
  status: string;
  product: PriceType;
  codes: CodeType[];
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
