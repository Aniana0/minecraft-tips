import React from 'react'
import styled from 'styled-components'


export default function BackgroundTile({flip, size, bgImg, newBgImg}) {
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
    <Tile className={(flip) && 'active'} style={style}>
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
      transition: transform 1000ms;
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
      background-color: red;
    }
    .back-side{
      background-color: blue;
      transform: rotateY(180deg);
    }
  `