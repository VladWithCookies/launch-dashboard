import { prop } from 'ramda';

import { ENDPOINTS } from 'constants/api';
import httpClient from 'utils/api/httpClient';

interface Params {
  startDate?: string;
  endDate?: string;
};

export const getLaunches = ({ startDate, endDate }: Params) => {
  const params = {
    window_end__gte: startDate,
    window_end__lte: endDate,
  };

  return httpClient.get(ENDPOINTS.LAUNCH, { params }).then(prop('data'));
};
