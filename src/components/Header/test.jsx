import { render } from 'utils/test-utils'

import Header from '.'

describe('<Header />', () => {
  it('should render component', () => {
    render(<Header>Lorem ipsum.</Header>)
  })
})
