import React from 'react'
import { styled } from 'styled-components'

export default function PageContainer({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 48px 0px 0px;
  width: 100%;
  height: calc(100% - 48px - 32px);
`