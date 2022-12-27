import { ProductType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type ProductSliceType = {
  list: ProductType | null;
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { actions, reducer } = productsSlice;
