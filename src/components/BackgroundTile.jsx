import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSwitchThemeContext } from '../context/SwitchThemeContext';


export default function BackgroundTile({delayTime, tileSize}) {
  const flipTime = 2000;

  const [bgImgUrl, setBgImgUrl] = useState('/images/tile_test01.png');
  const [rotateAngle, setRotateAngle] = useState(0);
  const [transitionType, setTransitionType] = useState('');
  const [isTransition, setIsTransition] = useState(false);
  
  const { isFlipTile, setFlipTile } = useSwitchThemeContext();
  
  const tileStyle = {
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    transform: `rotateY(${rotateAngle}deg)`,
    transition: `transform ${!isTransition ? 0 : flipTime / 2}ms ${transitionType}`
  };

  const frontSideStyle = {
    backgroundImage: `url(${bgImgUrl})`
  };

  const flipStart = new Promise((resolve) => {
    setTimeout(() => {
      setIsTransition(true);
      setRotateAngle(180);
      resolve(()=>{
        setTransitionType('ease-in');
      });
    }, delayTime);
  });
  const flipEnd = new Promise((resolve) => {
    setTimeout(() => {
      resolve(()=>{
        setBgImgUrl('/images/tile_test02.png')
        setTransitionType('ease-out');
        setRotateAngle(360);
      });
    }, flipTime / 2);
  });
  const flipReset = new Promise((resolve) => {
    setTimeout(() => {
      resolve(()=>{
        setTransitionType('');
        setIsTransition(false);
        setRotateAngle(0);
      });
    }, flipTime / 2);
  });

  useEffect(()=>{
    if(isFlipTile){
      flipStart.then(callback=>{
        callback();
      });
      flipEnd.then(callback=>{
        callback();
      });
    }
  }, [isFlipTile]);
  
  return (
    <Tile style={tileStyle}>
      <div className="side front-side" style={frontSideStyle}></div>
      <div className="side back-side"></div>
    </Tile>
  )
}
const Tile = styled.div`
  position: relative;
  transform-style: preserve-3d;
  .side{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background-size: cover;
  }
  .back-side{
    background-color: white;
    transform: rotateY(180deg);
  }
`