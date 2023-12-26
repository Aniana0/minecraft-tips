import React, { useState } from 'react'
import { styled } from 'styled-components';

export default function PasswordInput({id, setPassword}) {
  const onChangeEvent = (e)=>{
    setPassword(e.target.value);
  };

  return (
    <PasswordInputStyle
      type="password"
      name={id} id={id}
      placeholder='PW / 비밀번호'
      onChange={onChangeEvent}
    />
  )
}
const PasswordInputStyle = styled.input`
`