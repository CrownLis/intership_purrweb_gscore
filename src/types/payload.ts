export type SignUpPayload = {
  email: string;
  username: string;
  password: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type UpdatePasswordPayload = {
  currentPassword: string;
  newPassword: string;
};

export type UpdatePersonalDataPayload = {
  email: string;
  username: string;
};

export type PayForProductPayload = {
  priceId: number;
};
