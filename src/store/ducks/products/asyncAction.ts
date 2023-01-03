import { fetchProducts } from '@/api';
import { ProductType } from '@/types/data';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk<ProductType[], void>('products/getProducts', async () => {
  const response = await fetchProducts();
  const { data } = response;
  return data;
});
