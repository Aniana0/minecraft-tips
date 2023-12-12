import React from 'react'
import styled from 'styled-components'


export default function BackgroundTile({tileSize, bgImg, newBgImg, flipTime, flipState}) {
  const Tile = styled.div`
    width: ${tileSize}px;
    height: ${tileSize}px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1000ms;
    transform: rotateY(0deg);
    &.active{
      transition: transform ${flipTime}ms ease-in-out;
      transform: rotateY(180deg);
    }
    .side{
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      background-size: cover;
    }
    .front-side{
      background-image: url(${bgImg});
    }
    .back-side{
      background-image: url(${newBgImg ? newBgImg : bgImg});
      transform: rotateY(180deg);
    }
  `
  return (
    <Tile className={`${flipState? 'active' : ''}`}>
      <div className="side front-side"></div>
      <div className="side back-side"></div>
    </Tile>
  )
}