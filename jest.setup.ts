import React from 'react';
import { fetch } from 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';

import { server } from './src/utils/tests/requestInterceptor';

global.React = React;
global.fetch = fetch;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
