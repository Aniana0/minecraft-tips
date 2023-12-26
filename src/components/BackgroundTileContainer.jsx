import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import BackgroundTile from './BackgroundTile'
import { usePageThemeContext } from '../context/PageThemeContext';

export default function BackgroundTileContainer() {
    // 타일 별 시간차
    const tileDelayTime = 25;

    // 페이지 별 테마 관련 변수들
    const { pageTheme, setThemeChangeState, themeChangeDelay } = usePageThemeContext();
    
    const [frontTileTheme, setFrontTileTheme] = useState(pageTheme);
    const [backTileTheme, setBackTileTheme] = useState(pageTheme);
    const [backgroundWidth, setBackgroundWidth] = useState(0);
    const [backgroundHeight, setBackgroundHeight] = useState(0);
    const [tileSize, setTileSize] = useState(0);
    const [tileAmount, setTileAmount] = useState(0);
    const [tileFlipHandlers, setTileFlipHandlers] = useState([]);

    // 값 변경이 필요한 스타일은 따로 지정
    const tileAreaStyle = {
        width: backgroundWidth,
        height: backgroundHeight
    };

    // 타일 사이즈 설정 함수
    const resizeTile = useCallback(()=>{
        if(1024 <= window.innerWidth){
            setTileSize(160);
        }else if(768 <= window.innerWidth){
            setTileSize(120);
        }else if(480 <= window.innerWidth){
            setTileSize(80);
        }else{
            setTileSize(80);
        }
    }, []);

    // 배경화면 크기 설정 => 크기 딱 안 맞추면 이미지에 선이 자꾸 생겨서 타일 사이즈 크기를 정확히 맞춤
    // 1. 화면 크기에 따른 타일사이즈 설정
    // 2. 윈도우 사이즈가 타일 크기의 배수? -> 현재 사이즈 그대로 : 한 타일 정도 크게
    // 3. 총 타일 갯수 설정
    const resizeBackground = useCallback(()=>{
        resizeTile();
        if(tileSize > 0){
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const tileAmountWidth = (windowWidth  % tileSize) === 0 ? windowWidth  / tileSize : Math.floor(windowWidth  / tileSize) + 1;
            const tileAmountHeight = (windowHeight % tileSize) === 0 ? windowHeight / tileSize : Math.floor(windowHeight / tileSize) + 1;
            setBackgroundWidth(tileSize * tileAmountWidth);
            setBackgroundHeight(tileSize * tileAmountHeight);
            setTileAmount(tileAmountWidth * tileAmountHeight);
        }
    }, [resizeTile, tileSize]);
    
    // 뒤집힌 타일 리셋 함수
    // 총 타일 수 만큼 tileFlipHandlers에 false값 추가 => 얘의 값을 true로 변경하면 개별 타일이 뒤집힘
    const flipReset = useCallback(()=>{
        if(tileAmount > 0){
            const newProps = [];
            for(let i = 0; i < tileAmount; i++){
                newProps.push(false);
            }
            setTileFlipHandlers(newProps);
        }
    }, [tileAmount]);

    // 타일을 랜덤한 순서로 뒤집는 함수
    // └─ 타일마다 setTimeOut으로 랜덤한 시간 후 뒤집히게 함
    const flipTiles = useCallback(()=>{
        for(let i = 0; i < tileAmount; i++){
            const randomIndex = Math.floor(Math.random() * (tileAmount / 2));
            setTimeout(() => {
                setTileFlipHandlers(prop=>{
                    prop[i] = true;
                    return [...prop]
                });
            }, randomIndex * tileDelayTime);
        }
    }, [tileAmount])
    
    // 초기 화면 크기 설정
    // 윈도우 리사이즈 시 => 배경 크기 다시 설정 이벤트 추가
    useEffect(()=>{
        resizeBackground();
        window.addEventListener("resize", resizeBackground);
        return ()=>{
            window.removeEventListener("resize", resizeBackground);
        }
    }, [resizeBackground]);
    
    // 총 타일 갯수 바뀔때마다 tileFlipHandlers의 요소 갯수를 바꿈
    useEffect(()=>{
        flipReset();
    }, [flipReset])
    

    // pageTheme가 바뀌면 타일 뒤집어서 배경 바꾸기
    // 1. 바뀐 페이지 테마와 현재 타일 테마(frontTileTheme)가 다른지 확인 -> 같으면 뒤집을 필요 없음
    // 2. 타일 뒷면을 새 테마로 변경
    // 3. 랜덤 뒤집기
    useEffect(()=>{
        if(!(pageTheme === frontTileTheme)){
            setBackTileTheme(pageTheme);
            flipTiles();
        }
    }, [pageTheme, frontTileTheme, flipTiles])
    
    // 다 뒤집히면(tileFlipHandler의 요소가 전부 true인지 체크)
    // 1. 앞 타일도 새 테마로 바꿈
    // 2. 뒤집힌 타일 전부 리셋
    useEffect(()=>{
        if(tileFlipHandlers.length !== 0 && tileFlipHandlers.filter(prop=>prop).length === tileFlipHandlers.length){
            setTimeout(() => {
                setFrontTileTheme(pageTheme);
                flipReset();
                setThemeChangeState(true);
            }, themeChangeDelay);
        }
    }, [tileFlipHandlers, pageTheme, themeChangeDelay, flipReset])

    return (
        <BackgroundContainer>
            <div className="tile-area" style={tileAreaStyle}>
                {tileFlipHandlers.map((props, index)=>(
                    <BackgroundTile
                    key={index}
                    flip={props}
                    size={tileSize}
                    bgImg={`./images/tile_${frontTileTheme}_${tileSize}.png`}
                    newBgImg={`./images/tile_${backTileTheme}_${tileSize}.png`}
                    />
                ))}
            </div>
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    .tile-area{
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%,-50%);
        background-color: #1E1E1E;
    }
`