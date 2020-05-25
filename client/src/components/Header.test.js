import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Header from './Header';

afterEach(cleanup);

test('should render component', () => {
  expect(true).toBeTruthy();
});