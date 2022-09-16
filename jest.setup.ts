import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { server } from './src/utils/tests/requestInterceptor';

global.React = React;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
