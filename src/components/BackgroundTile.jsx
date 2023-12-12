import React from 'react'
import styled from 'styled-components'


export default function BackgroundTile(props) {
  return (
    <Tile className={flipState && 'active'}>
      <div className="side front-side"></div>
      <div className="side back-side"></div>
    </Tile>
  )
}
  const Tile = styled.div`
    width: 240px;
    height: 240px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1000ms;
    transform: rotateY(0deg);
    &.active{
      transform: rotateY(180deg);
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