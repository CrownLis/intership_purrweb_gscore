import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchProducts, payForProduct } from '@/api';
import { ProductType } from '@/types/data';
import { PayForProductPayload } from '@/types/payload';

export type PaymentAttributes = PayForProductPayload;

export const getProducts = createAsyncThunk<ProductType[], void>('products/getProducts', async () => {
  const response = await fetchProducts();
  const { data } = response;
  return data;
});

export const buyProduct = createAsyncThunk<void, PaymentAttributes>('products/buyProduct', async ({ priceId }) => {
  await payForProduct({ priceId });
});
