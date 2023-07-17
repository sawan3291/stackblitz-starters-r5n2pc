import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  icecream: 20,
};

const iceCreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    buy: (state, num) => {
      state.icecream -= num.payload;
    },
  },
});

export const iceCreamReducer = iceCreamSlice.reducer;
export const iceCreamAction = iceCreamSlice.actions;
