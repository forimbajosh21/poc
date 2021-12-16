import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScholarClaimsResponse } from 'common/models/apis/scholarClaimsApi';

export interface ScholarState {
  claims: ScholarClaimsResponse[]
}

const initialState: ScholarState = {
  claims: [],
};

const scholar = createSlice({
  name: 'scholar',
  initialState,
  reducers: {
    setClaims(state, action: PayloadAction<ScholarClaimsResponse[]>) {
      state.claims = action.payload;
    },
  },
});
export const { setClaims } = scholar.actions;
export default scholar.reducer;
