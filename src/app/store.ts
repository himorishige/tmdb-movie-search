import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'src/features/user/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { movieApi } from 'src/features/movie/movieQuery';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
