import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSubscribes } from '@/api';
import { SubscribeType } from '@/types/data';

export const getSubscribes = createAsyncThunk<SubscribeType[], void>('subscribes/getSubscribes', async () => {
  const response = await fetchSubscribes();
  const { data } = response;
  return data;
});
