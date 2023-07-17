import { createSlice } from '@reduxjs/toolkit';
import { iceCreamAction } from './iceCreamSlice';

const initialState = {
  data: 12,
};

const dataSlice = createSlice({
  name: 'dataname',
  initialState,
  reducers: {
    decrease: (state, num) => {
      state.data -= num.payload;
    },
    increase: (state, num) => {
      state.data += num.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(iceCreamAction.buy, (state) => {
      state.data = 25;
    });
  },
});

export const dataReducer = dataSlice.reducer;
export const dataAction = dataSlice.actions;
