import React, { useCallback, useState } from 'react'
import BackgroundWait from '../components/BackgroundWait';
import { styled } from 'styled-components';
import { useUserContext } from '../context/UserContext';
import { updateUserProfile } from '../api/firebase';

export default function MenuAccountState() {
  const theme = "white";

  const { user } = useUserContext();
  const [ isActive, setIsActive ] = useState(false);
  const [ isEditDisplayName, setIsEditDisplayName ] = useState(false);
  const [ saveInput, setSaveInput ] = useState("")


  const activeChangeDisplayName = useCallback(()=>{
    setIsEditDisplayName(true);
  },[])
  
  const saveDisplayName = useCallback((e)=>{
    e.preventDefault();
    updateUserProfile({displayName: saveInput});
    setIsEditDisplayName(false);
    setSaveInput("");
  },[])
  
  const saveInputValue = (e)=>{
    setSaveInput(e.target.value)
  };


  // form요소는 서버랑 통신할때 다 쓴다
  console.log(user)
  return (
    <BackgroundWait theme={theme} setActive={setIsActive}>
      <Container className={isActive ? "active" : ""}>
        <h2>계정 정보</h2>
        <div className="statebox displayName-state">
          <p>닉네임</p>
          {isEditDisplayName ? (
            <form onSubmit={saveDisplayName}>
              <input type="text" placeholder={user.displayName} onChange={saveInputValue} />
              <button type="submit">저장</button>
            </form>
          ):(
            <div className='textbox displayName-text'>
              <p>{user.displayName ? user.displayName : "이름이 없어요"}</p>
              <button onClick={activeChangeDisplayName}>수정</button>
            </div>
        )}
        </div>
        <p>E-Mail : {user.email ? user.email : "이메일이 없어요"}</p>
      </Container>
    </BackgroundWait>
  )
}
const Container = styled.div`
  text-align: left;
  visibility: collapse;
  &.active {
    visibility: visible;
  }
  .statebox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .textbox{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`