import React, { useState } from 'react'
import SignUpInputEmail from '../components/SignUpInputEmail'
import { styled } from 'styled-components';
import WaitBackground from '../components/WaitBackground';

export default function SignUp() {
  const theme = "white";
  const [ isActive, setIsActive ] = useState(false);
  
  return (
    <WaitBackground theme={theme} setActive={setIsActive}>
      <Container className={isActive && 'active'}>
        <SignUpInputEmail />
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