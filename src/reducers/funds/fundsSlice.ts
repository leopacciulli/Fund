import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import fundsJson from '../../mocks/funds.json';
import {Fund} from '../../models/interfaces/funds.interface';

export interface UserState {
  funds: Fund[];
}

const initialState: UserState = {
  funds: fundsJson,
};

export const fundsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFunds: (state, action: PayloadAction<Fund[]>) => {
      state.funds = action.payload;
    },
  },
});

export const {setFunds} = fundsSlice.actions;

export default fundsSlice.reducer;
