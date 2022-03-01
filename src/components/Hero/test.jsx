import { render } from 'utils/test-utils'

import Hero from '.'

describe('<Hero />', () => {
  it('should render component', () => {
    render(<Hero>Lorem ipsum.</Hero>)
  })
})
