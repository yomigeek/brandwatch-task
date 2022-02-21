/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import Header from './index'

test('renders component snapshot', () => {
    render(<Header />)
    const asFragment = render(<Header />).asFragment
    expect(asFragment()).toMatchSnapshot()
})
