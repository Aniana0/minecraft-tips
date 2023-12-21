import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const goBackEvent = ()=>{
    navigate(-1);
  }
  
  return (
    <div>
      <h1>NotFound</h1>
      <button onClick={goBackEvent}>{'<-'}</button>
    </div>
  )
}
