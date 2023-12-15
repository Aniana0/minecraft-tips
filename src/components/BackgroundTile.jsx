import React from 'react'
import styled from 'styled-components'
import { usePageThemeContext } from '../context/PageThemeContext';


export default function BackgroundTile({flip, size, bgImg, newBgImg}) {
  const { themeChangeDelay } = usePageThemeContext();
  const style = {
    width: `${size}px`,
    height: `${size}px`
  };
  const frontSideStyle = {
    backgroundImage : `url(${bgImg})`
  };
  const backSideStyle = {
    backgroundImage : `url(${newBgImg})`
  };
  return (
    <Tile className={(flip) && 'active'} style={style} time={themeChangeDelay}>
      <div className="side front-side" style={frontSideStyle}></div>
      <div className="side back-side" style={backSideStyle}></div>
    </Tile>
  )
}
const Tile = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  &.active{
    transform: rotateY(180deg);
    transition: transform ${props => props.time}ms ease-in-out;
  }
  .side{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .front-side{
    background-color: black;
  }
  .back-side{
    background-color: white;
    transform: rotateY(180deg);
  }
`