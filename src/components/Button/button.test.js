/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import Button from './index'

test('renders component snapshot', () => {
    render(<Button />)
    const asFragment = render(<Button />).asFragment
    expect(asFragment()).toMatchSnapshot()
})
