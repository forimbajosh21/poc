import { AppThunk } from 'app/store';
import { setClaims } from '.';
import { claimsApi } from './api';

export const getClaims = (): AppThunk => async (dispatch, getState) => {
  const { ronin } = getState().user;
  try {
    const result = await claimsApi(ronin);
    dispatch(setClaims(result));
  } catch (error) {
    console.log(error);
  }
};
