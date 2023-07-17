import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};
const fetchPosts = {
  loading: 'loading',
  error: 'error',
  fulfilled: 'fulfilled',
};
// const fetchPosts = createAsyncThunk('icecream/fetchPosts', () => {
//   return new Promise((r) => {
//     setTimeout(() => {
//       r([
//         {
//           id: 1,
//           user: 'Sawan',
//           posts: 'test india',
//         },
//       ]);
//     });
//   });
// });

const postSlice = createSlice({
  name: 'icecream',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.loading, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = '';
    });

    builder.addCase(fetchPosts.error, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action?.error?.message;
    });
  },
});

export const userPostAction = fetchPosts;
export const userPostReducer = postSlice.reducer;
