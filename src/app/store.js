import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import photoReducer from 'features/Photo/photoSlice';

const rootReducer = {
  photos: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
