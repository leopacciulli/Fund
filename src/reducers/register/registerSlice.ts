import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserRegister} from '../../models/interfaces/register.interface';

export interface UserToRegisterState {
  userToRegister: UserRegister | null;
}

const initialState: UserToRegisterState = {
  userToRegister: null,
};

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    setUserToRegister: (state, action: PayloadAction<UserRegister>) => {
      state.userToRegister = action.payload;
    },
  },
});

export const {setUserToRegister} = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
