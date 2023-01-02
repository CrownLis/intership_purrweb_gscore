import { ProductType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { getProducts } from './asyncAction';

type ProductSliceType = {
  list: ProductType[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProductSliceType = {
  list: null,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return { ...state, ...action.payload.products };
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    });
  },
});

export const { actions, reducer } = productsSlice;
