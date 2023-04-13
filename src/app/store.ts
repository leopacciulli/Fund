import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import registerSlice from '../reducers/register/registerSlice';
import userSlice from '../reducers/user/userSlice';
import fundsSlice from '../reducers/funds/fundsSlice';

export const store = configureStore({
  reducer: {
    funds: fundsSlice,
    user: userSlice,
    register: registerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
