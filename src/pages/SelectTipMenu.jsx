import React, { useState } from 'react'
import TipCategories from '../components/TipCategories'
import { styled } from 'styled-components';
import WaitBackground from '../components/WaitBackground';

export default function SelectTipMenu() {
  const theme = "default";
  const [ isActive, setIsActive ] = useState(false);
  
  return (
    <WaitBackground theme={theme} setActive={setIsActive}>
      <Container className={isActive && 'active'}>
        <TipCategories/>
      </Container>
    </WaitBackground>
  )
}

const Container = styled.div`
  visibility: collapse;
  &.active {
    visibility: visible;
  }
`