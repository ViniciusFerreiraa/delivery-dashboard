import { render } from 'utils/test-utils'

import Faq from '.'

describe('<Faq />', () => {
  it('should render component', () => {
    render(
      <Faq>
        <h1>Faq</h1>
      </Faq>
    )
  })
})
