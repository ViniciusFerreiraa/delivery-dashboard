import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  gap: 0px;
  grid-template-areas:
    'header'
    'main';

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
`

export const ContentMain = styled.div`
  height: 100%;
  margin: 0 auto;
  grid-area: main;
  overflow: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
