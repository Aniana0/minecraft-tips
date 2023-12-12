import React from 'react'

function Tile({flip}) {
    return (
        <div className={`tile ${flip ? 'flip' : ''}`}></div>
    )
}

export default Tile
