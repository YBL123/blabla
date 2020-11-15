import React from 'react'
import GridCell from './GridCell'


const GridRow = (props) => {
  const { cells, rovers, handleClick, clickedRover } = props


  let printCells = (
    <div className='grid-cell-row'>
      {
        cells.map((cell, i) => {
          let roverObj //* will be undefined unless the if statement below is true
          rovers.map((rover => {
            if (rover.currentPosition.x === cell.x && rover.currentPosition.y === cell.y) {
              roverObj = {
                roverId: rover.roverId,
                currentPosition: rover.currentPosition
              }
            }
            return roverObj
          }))
          return <GridCell key={i} cell={cell} rover={roverObj} handleClick={handleClick} isClicked={parseInt(clickedRover.x) === cell.x && parseInt(clickedRover.y) === cell.y}
          />
        })
      }
    </div>
  )

  return (
    <div>
      {printCells}
    </div>
  )
}

export default GridRow
