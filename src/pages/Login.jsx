import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import WaitBackground from '../components/WaitBackground';
import { loginWithEmail } from '../api/firebase';

export default function LogIn() {
  const theme = "white";

  const [ isActive, setIsActive ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  
  const navigate = useNavigate();

  const loginEvent = async e => {
    e.preventDefault();
    try{
      const user = await loginWithEmail(email, password);
    }
  };

  return (
    <WaitBackground theme={theme} setActive={setIsActive}>
      <Container className={isActive && 'active'}>
        <form onSubmit={loginEvent}>
          <legend>로그인</legend>
          <ul>
            <li>
              <label htmlFor="loginInputEmail">E-MAIL</label>
              <input type="email" name="loginInputEmail" id="loginInputEmail" />
            </li>
            <li>
              <label htmlFor="loginInputPassword">비밀번호</label>
              <input type="password" name="loginInputPassword" id="loginInputPassword" />
            </li>
            <button type="submit">로그인</button>
          </ul>

        </form>
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