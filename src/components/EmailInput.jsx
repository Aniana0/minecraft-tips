import React from 'react'
import { styled } from 'styled-components';

export default function InputEmail({id, setEmail}) {
  const onChangeEvent = (e)=>{
    setEmail(e.target.value);
  };

  return (
    <EmailInputStyle
      type="email"
      name={id} id={id}
      placeholder='E-Mail / 이메일'
      onChange={onChangeEvent}
    />
  )
}
const EmailInputStyle = styled.input`
`