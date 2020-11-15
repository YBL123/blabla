import React from 'react'

import roverdog from '../assets/roverdog.png'


const GridCell = (props) => {
    const { cell, rover, handleClick, isClicked } = props
    

    //* assigning the correlating image position depending on the rover's movement assignement
    // let roverImgPos
    if (rover !== undefined) {
        if (rover.currentPosition.position === 'E') {
            // roverImgPos = roverE
        } else if (rover.currentPosition.position === 'N') {
            // roverImgPos = roverN
        } else if (rover.currentPosition.position === 'S') {
            // roverImgPos = roverS
        } else if (rover.currentPosition.position === 'W') {
            // roverImgPos = roverW
        }
    }

    return (
        <div className={`grid-cell-item ${isClicked ? 'active' : ''}`}>
            <div className="cell-wrapper">
                <div className="cell-id">
                    {`${cell.x} , ${cell.y}`}
                </div>
                <div className="box-root">
                    {rover !== undefined ?
                        <div className="rover-wrapper">
                            <img className="roverdog" src={roverdog} rover_id={rover.roverId} cell_x={cell.x} cell_y={cell.y} onClick={(e) => handleClick(e)} alt='roverdog'/>
                        </div> : null}
                </div>
            </div>
        </div>
    )

}

export default GridCell
