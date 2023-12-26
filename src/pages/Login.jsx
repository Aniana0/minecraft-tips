import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BackgroundWait from '../components/BackgroundWait';
import { loginWithEmail, onUserState } from '../api/firebase';
import { useUserContext } from '../context/UserContext';
import InputEmail from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

export default function LogIn() {
  const theme = "white";

  const { setLoginUser } = useUserContext();

  const [ isActive, setIsActive ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const navigate = useNavigate();


  const loginEvent = async e => {
    e.preventDefault();
    try{
      const user = await loginWithEmail(email, password);
      if(user){
        onUserState(setLoginUser);
        navigate("/");
      }else{
        setErrorMsg('이메일이나 비밀번호가 일치하지 않습니다');
      }
    }catch(err){
      console.error(err);
    }
  };

  return (
    <BackgroundWait theme={theme} setActive={setIsActive}>
      <Container className={isActive ? 'active' : ''}>
        <form onSubmit={loginEvent}>
          <legend>로그인</legend>
          <ul>
            <li>
              <label htmlFor="loginInputEmail">E-MAIL</label>
              <InputEmail
                id = "loginInputEmail"
                setEmail = {setEmail}
              />
            </li>
            <li>
              <label htmlFor="loginInputPassword">비밀번호</label>
              <PasswordInput
                id = "loginInputPassword"
                setPassword = {setPassword}
              />
            </li>
            <button type="submit">로그인</button>
          </ul>

        </form>
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