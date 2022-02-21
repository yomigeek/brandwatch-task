/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Container from './index';

test('renders snapshot', () => {
  render(
    <Container>
      <div>Welcome</div>
    </Container>
  );
  const asFragment = render(
    <Container>
      <div>Welcome</div>
    </Container>
  ).asFragment;
  expect(asFragment()).toMatchSnapshot();
});
