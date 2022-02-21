/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import NotFound from './index';

test('renders snapshot', () => {
  render(<NotFound />);
  const asFragment = render(<NotFound />).asFragment;
  expect(asFragment()).toMatchSnapshot();
});
