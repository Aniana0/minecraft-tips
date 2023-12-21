import React from 'react'

export default function EmailInput({id, setEmail, setErrorMsg}) {
  const onChangeEvent = (e)=>{
    setErrorMsg("");
    if(timer){
      clearTimeout();
    }else{
      timer = setTimeout(() => {
        setEmail(e.target.value);
      }, 500);
    }
  };
  
  let timer;

  return (
    <>
      <input
      type="email"
      name={id} id={id}
      placeholder='E-Mail / 이메일'
      onChange={onChangeEvent}
      />  
    </>
  )
}
