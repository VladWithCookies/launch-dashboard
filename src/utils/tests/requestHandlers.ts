import { rest } from 'msw';

import { API_URL, ENDPOINTS, GEO_API_URL } from 'constants/api';
import * as mocks from 'mocks/api';

export const requestHandlers = [
  rest.get(`${API_URL}${ENDPOINTS.LAUNCH}`, (_req, res, ctx) => res(ctx.json(mocks.getLaunches))),
  rest.get(GEO_API_URL, (_req, res, ctx) => res(ctx.json(mocks.geography))),
];
