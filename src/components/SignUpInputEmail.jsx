import React, { useEffect, useState } from 'react'
import { signupWithEmail } from '../api/firebase'

export default function SignUpInputEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let emailTimer;
  let pwTimer;

  const emailOnChangeEvent = (event)=>{
    if(emailTimer){
      clearTimeout(emailTimer);
    }
    emailTimer = setTimeout(() => {
      setEmail(event.target.value);
    }, 500);
  }

  const pwOnChangeEvent = (event)=>{
    if(pwTimer){
      clearTimeout(pwTimer);
    }
    pwTimer = setTimeout(() => {
      setPassword(event.target.value);
    }, 500);
  }

  const signUpEvent = ()=>{
    const user = signupWithEmail(email, password);
  };

  return (
    <form>
      <label htmlFor="signup-email-input">E-mail</label>
      <input type="email" name="signup-email" id="signup-email-input" placeholder='이메일' onChange={emailOnChangeEvent} />
      <label htmlFor="signup-pw-input">비밀번호</label>
      <input type="password" name="signup-pw" id="signup-pw-input" placeholder='비밀번호' onChange={pwOnChangeEvent} />
      {/* <label htmlFor="signup-repw-input">비밀번호 재입력</label>
      <input type="password" name="signup-repw" id="signup-repw-input" /> */}
      <button type="submit" onClick={signUpEvent}>입력</button>
    </form>
  )
}
