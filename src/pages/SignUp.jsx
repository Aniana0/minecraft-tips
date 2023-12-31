import React, { useState } from 'react'
import SignUpBox from '../components/SignUpBox'
import { styled } from 'styled-components';
import BackgroundWait from '../components/BackgroundWait';

export default function SignUp() {
  const theme = "white";
  const [ isActive, setIsActive ] = useState(false);
  
  return (
    <BackgroundWait theme={theme} setActive={setIsActive}>
      <Container className={isActive && 'active'}>
        <SignUpBox />
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