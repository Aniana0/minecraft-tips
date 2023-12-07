import React from 'react'
import { styled } from 'styled-components'

export default function background() {
  return (
    <Container>
        <div className="front"></div>
        <div className="back"></div>
    </Container>
  )
}

const Container = styled.div`
    width: 160px;
    height: 160px;
    .front{
        background-color: wheat;
    }
    .background{
        background-color: black;
    }
`
