import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BackgroundTile from './BackgroundTile'
import { usePageThemeContext } from '../context/PageThemeContext';

export default function BackgroundArea() {
    const { pageTheme , changePageTheme } = usePageThemeContext();

    const [startPageTheme, setStartPageTheme] = useState(pageTheme);
    const [backgroundWidth, setBackgroundWidth] = useState(0);
    const [backgroundHeight, setBackgroundHeight] = useState(0);
    const [tileSize, setTileSize] = useState(0);
    const [tileAmount, setTileAmount] = useState(0);
    const [tilesProps, setTilesProps] = useState([]);

    const tileAreaStyle = {
        width: backgroundWidth,
        height: backgroundHeight
    };

    const test = ()=>{
        changePageTheme('test');
    };

    useEffect(()=>{
        const setBackgroundSize = async (width, height, tile)=>{
            const widthTiles = (width % tile) === 0 ? width / tile : Math.floor(width / tile) + 1;
            const heightTiles = (height % tile) === 0 ? height / tile : Math.floor(height / tile) + 1;
            setTileSize(tile);
            setTileAmount(widthTiles * heightTiles);
            setBackgroundWidth(tile * widthTiles);
            setBackgroundHeight(tile * heightTiles);
            
        };
        const resizeWidthHeight = ()=>{
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            if(1024 <= windowWidth){
                setBackgroundSize(windowWidth, windowHeight, 240);
            }else if(768 <= windowWidth){
                setBackgroundSize(windowWidth, windowHeight, 160);
            }else if(480 <= windowWidth){
                setBackgroundSize(windowWidth, windowHeight, 120);
            }else{
                setBackgroundSize(windowWidth, windowHeight, 80);
            }
        };
        resizeWidthHeight();
        window.addEventListener("resize", resizeWidthHeight);
        return ()=>{
            window.removeEventListener("resize", resizeWidthHeight);
        }
    }, [])
    
    useEffect(()=>{
        const newProps = [];
        for(let i = 0; i < tileAmount; i++){
            newProps.push({
                flipState: false,
                bgImg: `./images/tile_${startPageTheme}_${tileSize}.png`,
                newBgImg: `./images/tile_default_${tileSize}.png`
            });
        }
        setTilesProps(newProps);
    }, [tileSize, tileAmount, startPageTheme])

    useEffect(()=>{
        const delay = new Promise((resolve) => {
            for(let i = 0; i < tilesProps.length; i++){
                setTimeout(() => {
                    tilesProps[i] = {...tilesProps[i], flipState: true, newBgImg: `./images/tile_${pageTheme}_${tileSize}.png`};
                    setTilesProps([...tilesProps]);
                    if(i === tilesProps.length-1){
                        resolve('');
                    }
                }, i*100);
            };
        })
        delay.then(()=>{
            tilesProps.forEach((props, index)=>{
                tilesProps[index] = {...props, flipState: false, bgImg: `./images/tile_${pageTheme}_${tileSize}.png`};
                setTilesProps([...tilesProps]);
            })
        })
    }, [pageTheme])

    return (
        <BackgroundContainer>
            <button onClick={test}>클릭</button>
            <div className="tile-area" style={tileAreaStyle}>
                {tilesProps.map((props, index)=>(
                    <BackgroundTile flip={props.flipState} size={tileSize} bgImg={props.bgImg} newBgImg={props.newBgImg} />
                ))}
            </div>
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .tile-area{
        display: flex;
        z-index: -1;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        flex-wrap: wrap;
        background-color: black;
        width: 100%;
        height: 100%;
    }
`