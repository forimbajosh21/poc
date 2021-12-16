import axiosApi from 'common/utils/axios';
import { ScholarClaimsResponse } from 'common/models/apis/scholarClaimsApi';

export const claimsApi = async (
  roninId: string,
): Promise<ScholarClaimsResponse[]> => {
  const result = await axiosApi.get<{ data: ScholarClaimsResponse[] }>(
    '/scholar/claims',
    { params: { ronin_id: roninId } },
  );
  return result.data.data;
};
