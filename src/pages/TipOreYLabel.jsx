import React, { useState } from 'react'
import BackgroundWait from '../components/BackgroundWait';
import { styled } from 'styled-components';

export default function TipOreYLabel() {
  const theme = "stone";
  const [ isActive, setIsActive ] = useState(false);
  return (
    <BackgroundWait theme={theme} setActive={setIsActive}>
      <Container className={isActive ? 'active' : ''}>
        <p>테스트</p>
      </Container>
    </BackgroundWait>
  )
}
const Container = styled.div`
  visibility: collapse;
  &.active {
    visibility: visible;
  }
`