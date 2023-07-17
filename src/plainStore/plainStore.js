import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './plainStoreSlics';
import { iceCreamReducer } from './iceCreamSlice';

import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
