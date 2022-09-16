import { ENDPOINTS } from 'constants/api';
import httpClient from 'utils/api/httpClient';
import * as api from '..';

describe('API', () => {
  jest.spyOn(httpClient, 'get');

  describe('getLaunches()', () => {
    it('calls correct endpoint', () => {
      const startDate = '2022-09-16T16:17:55+02:00';
      const endDate = '2022-10-07T16:17:55+02:00';

      const params = {
        window_end__gte: startDate,
        window_end__lte: endDate,
      };

      api.getLaunches({ startDate, endDate });

      expect(httpClient.get).toBeCalledTimes(1);
      expect(httpClient.get).toBeCalledWith(ENDPOINTS.LAUNCH, { params });
    });
  });
});
