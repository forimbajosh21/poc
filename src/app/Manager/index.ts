import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Scholar } from 'common/models/typings';

interface ClaimDetailsState {
  slp: number
  id: string
  binanceId: string
}

export interface ManagerState {
  claimStep: 0 | 1
  scholars: Scholar[]
  selectedScholar?: Scholar
  slpPrice: string
  claimDetails?: ClaimDetailsState
}

const initialState: ManagerState = {
  claimStep: 0,
  scholars: [],
  slpPrice: '0',
};

const manager = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    setClaimStep(state, action: PayloadAction<0 | 1>) {
      state.claimStep = action.payload;
    },
    setScholars(state, action: PayloadAction<Scholar[]>) {
      state.scholars = action.payload;
    },
    setSelectedScholar(state, action: PayloadAction<Scholar>) {
      state.selectedScholar = action.payload;
    },
    setSlpPrice(state, action: PayloadAction<string>) {
      state.slpPrice = action.payload;
    },
    setClaimDetails(state, action: PayloadAction<ClaimDetailsState>) {
      state.claimDetails = action.payload;
    },
  },
});
export const {
  setClaimStep, setScholars, setSelectedScholar, setSlpPrice, setClaimDetails,
} = manager.actions;
export default manager.reducer;
