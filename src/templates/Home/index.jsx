import { NextSeo } from 'next-seo'
import Base from 'templates/Base'

import * as S from './styles'

export default function HomeTemplate(props) {
  return (
    <Base>
      <NextSeo title="Home" description="Home page" canonical="" />

      <S.Wrapper {...props}>
        <h1>Home</h1>
      </S.Wrapper>
    </Base>
  )
}
