import { AppThunk } from 'app/store';
import { find } from 'lodash';

import {
  setClaimDetails, setClaimStep, setScholars, setSelectedScholar, setSlpPrice,
} from '.';
import { claimSlpApi, scholarListApi, slpPriceApi } from './api';

export const getScholarList = (): AppThunk => async (dispatch) => {
  try {
    const scholars = await scholarListApi(
      'ronin:16e1218ed78334c9c7399da85774c407b3adad7d',
    );
    dispatch(setScholars(scholars));
  } catch (error) {
    console.log(error);
  }
};

export const getSlpPrice = (): AppThunk => async (dispatch) => {
  const result = await slpPriceApi();
  console.log(result);
  dispatch(setSlpPrice(result['smooth-love-potion'].php));
};

export const claimSlp = (roninId: string, setIsLoading?: (value: boolean) => void): AppThunk => async (dispatch, getState) => {
  const { scholars } = getState().manager;
  const scholar = find(scholars, { ronin_id: roninId });
  if (scholar) dispatch(setSelectedScholar(scholar));

  setIsLoading?.call(null, true);
  try {
    await getSlpPrice();
    const result = await claimSlpApi(roninId);

    dispatch(setClaimDetails({
      slp: result.claimed_slp,
      id: result.claim_trans_id,
      binanceId: result.binance_trans_id,
    }));
    dispatch(setClaimStep(1));
  } catch (error) {
    console.log(error);
  } finally {
    // setIsLoading?.call(null, false);
  }
};
