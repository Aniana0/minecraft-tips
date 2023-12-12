import React, { useEffect, useState } from 'react'
import Tile from './Tile';
import './TileEffect.css'

function TileEffect() {
    const [tile, setTile] = useState(Array(20).fill(false))
    const [flipTile, setFlipTile] = useState([]);

    useEffect(() => {
        const flipTile = () => {
            const noFlipTile = tile.map((flip, index) => ({ flip, index })).filter(tile => !tile.flip)

            if (noFlipTile.length === 0) {
                clearInterval(timer);
            }
            const randomTile = noFlipTile[Math.floor(Math.random() * noFlipTile.length)].index
            setTile((tile) => tile.map((flip, index) => index === randomTile ? true : flip))
            setFlipTile(flip => [...flip, randomTile]);
            
        }

        const timer = setInterval(flipTile,20);
        return()=>clearInterval(timer)


    }, [])
    return (
        <div className='tileContainer'>
            {tile.map((flip, index) => (
                <Tile key={index} flip={flip} />
            ))}
        </div>
    )
}

export default TileEffect
