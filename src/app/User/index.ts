import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserTypes } from 'common/models/typings';

export interface UserState {
  isAuthenticated: boolean
  type?: UserTypes
  name: string
  ronin: string
}

const initialState: UserState = {
  isAuthenticated: false,
  type: 'scholar',
  name: '',
  ronin: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuth(state, action: PayloadAction<{ isAuthenticated: boolean, type: UserTypes, name: string, ronin: string }>) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.type = action.payload.type;
      state.name = action.payload.name;
      state.ronin = action.payload.ronin;
    },
  },
});
export const { setUserAuth } = user.actions;

export default user.reducer;
