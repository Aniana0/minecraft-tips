import React, { useState } from 'react'
import TipCategoryBox from '../components/TipCategoryBox'
import { styled } from 'styled-components';
import BackgroundWait from '../components/BackgroundWait';

export default function MenuSelectTip() {
  const theme = "default";
  const [ isActive, setIsActive ] = useState(false);
  
  return (
    <BackgroundWait theme={theme} setActive={setIsActive}>
      <Container className={isActive && 'active'}>
        <TipCategoryBox/>
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