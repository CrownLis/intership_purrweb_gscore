import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCodes } from '@/api';
import { CodeType } from '@/types/data';

export const getCodes = createAsyncThunk<CodeType[], void>('codes/getCodes', async () => {
  const response = await fetchCodes();
  const { data } = response;
  return data;
});
