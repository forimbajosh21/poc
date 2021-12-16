import axios from 'axios';
import { SlpClaimApiResponse } from 'common/models/apis/SlpClaimApi';
import { SlpPriceResponse } from 'common/models/apis/SlpPriceApi';
import { Scholar } from 'common/models/typings';
import axiosApi from 'common/utils/axios';

export const scholarListApi = async (roninId: string): Promise<Scholar[]> => {
  const result = await axiosApi.get<{ data: Scholar[] }>('/manager/list', {
    params: { manager_ronin_id: roninId },
  });
  return result.data.data;
};

export const claimSlpApi = async (roninId: string): Promise<SlpClaimApiResponse> => {
  const result = await axiosApi.get<{ data: SlpClaimApiResponse}>('/slp/claim', {
    params: { ronin_id: roninId },
  });
  return result.data.data;
};

export const slpPriceApi = async (): Promise<SlpPriceResponse> => {
  const result = await axios.get<SlpPriceResponse>(
    'https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php',
  );
  return result.data;
};
