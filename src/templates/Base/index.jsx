import Footer from 'components/Footer'
import Header from 'components/Header'
import useGetData from 'hooks/useGetData'

import * as S from './styles'

const Base = ({ children }) => {
  const header = useGetData(
    'http://wp-provu.raccoon-stage.com/wp-json/myplugin/v1/group/header_options'
  )

  return (
    <S.Wrapper>
      <Header {...header} />

      <S.ContentMain>
        {children}
        <Footer />
      </S.ContentMain>
    </S.Wrapper>
  )
}

export default Base
