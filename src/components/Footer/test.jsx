import { render } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render component', () => {
    render(
      <Footer>
        <h1>Footer</h1>
      </Footer>
    )
  })
})
