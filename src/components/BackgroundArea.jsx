import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BackgroundTile from './BackgroundTile'
import { useSwitchThemeContext } from '../context/SwitchThemeContext';

export default function BackgroundArea() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [backgroundWidth, setBackgroundWidth] = useState(windowWidth);
    const [backgroundHeight, setBackgroundHeight] = useState(windowHeight);
    const [tileSize, setTileSize] = useState(0);
    const [widthTileAmount, setWidthTileAmount] = useState(0);
    const [heightTileAmount, setHeightTileAmount] = useState(0);
    const [tilesProps, setTilesProps] = useState([]);

    const { pageTheme , changePageTheme } = useSwitchThemeContext();

    const resizeWidthHeight = ()=>{
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    const setBackgroundSize = async (width, height, tile)=>{
        const widthTile = (width % tile) === 0 ? width / tile : Math.floor(width / tile) + 1;
        const heightTile = (height % tile) === 0 ? height / tile : Math.floor(height / tile) + 1;
        setTileSize(tile);
        setWidthTileAmount(widthTile);
        setHeightTileAmount(heightTile);
        setBackgroundWidth(tile * widthTile);
        setBackgroundHeight(tile * heightTile);
    };

    const test = ()=>{
        changePageTheme('test');
    };

    const fillWithTile = ()=>{
        for(let i = 0; i < (widthTileAmount+heightTileAmount-1); i++){
            tilesProps.push({
                tileSize: tileSize,
                bgImg: `./images/tile_${pageTheme}_${tileSize}.png`,
                newBgImg: '',
                flipTime: 1000,
                flipState: false
            })
        }
        const elements = [];
        for(let i_h = 0; i_h < heightTileAmount; i_h++){
            for(let i_w = 0; i_w < widthTileAmount; i_w++){
                const index = i_h + i_w;
                elements.push(
                    <BackgroundTile
                        key={`${i_h}_${i_w}`}
                        tileSize={tilesProps[index].tileSize}
                        bgImg={tilesProps[index].bgImg}
                        newBgImg={tilesProps[index].newBgImg}
                        flipTime={tilesProps[index].flipTime}
                        flipState={tilesProps[index].flipState}
                    />
                );
            }
        }
        return elements;
    };

    useEffect(()=>{
        window.addEventListener("resize", resizeWidthHeight);
        return ()=>{
            window.removeEventListener("resize", resizeWidthHeight);
        }
    }, [])

    useEffect(()=>{
        if(1024 <= windowWidth){
            setBackgroundSize(windowWidth, windowHeight, 240);
        }else if(768 <= windowWidth){
            setBackgroundSize(windowWidth, windowHeight, 160);
        }else if(480 <= windowWidth){
            setBackgroundSize(windowWidth, windowHeight, 80);
        }else{
            setBackgroundSize(windowWidth, windowHeight, 16);
        }
    }, [windowWidth, windowHeight]);

    useEffect(()=>{
        tilesProps.forEach((props, index)=>{
            tilesProps[index] = {...props, newBgImg: `./images/tile_${pageTheme}_${tileSize}.png`, flipState: 'active'};
            setTilesProps([...tilesProps]);
        });
    }, [pageTheme])

    const BackgroundContainer = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        p{
            color: white;
        }
        .tile-area{
            z-index: -1;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-wrap: wrap;
            background-color: black;
            width: ${backgroundWidth}px;
            height: ${backgroundHeight}px;
        }
    `
    return (
        <BackgroundContainer>
            <button onClick={test}>클릭</button>
            <div className="tile-area">
                {fillWithTile()}
            </div>
        </BackgroundContainer>
    )
}
