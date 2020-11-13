import React, { useState, useEffect } from 'react'

import GridRow from './GridRow'


import { getAllRovers } from '../lib/api'

const Main = () => {

  const [gridState, setGridState] = useState([])
  const [roversState, setRoversState] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [clickedRoverId, setClickedRoverId] = useState({})

  useEffect(() => {
    const gridWidth = 6
    const gridHeight = 6
    let grid = []


    //* creating a 2 dimentional grid. x and y. 
    //* creating arrays within an array. The first array represents the y axis and the arrays nested within represent the x axis.
    for (let i = 0; i < gridHeight; i++) {
      //* This loop will create the number of rows representing the y axis as arrays. This will loop 6 times as stated in gridsHeight. 
      grid.push([])
      for (let ii = 0; ii < gridWidth; ii++) {
        grid[i].push({
          //* i represents the first loop which creates the y axis array. ii represents the second loop which creates the x axis arrays
          x: ii, y: i, active: false //! ref: highlight
        })
      }
    }

    //* reversing the order of the cells so that the bottom left corner will start at 0,0
    //* setting the reversed cells to state
    setGridState(grid.reverse())
  }, [])


  const handleClick = (e) => {
    const clickedRover = {
      roverId: e.target.getAttribute('rover_id'),
      x: e.target.getAttribute('cell_x'),
      y: e.target.getAttribute('cell_y'),
    }
    setClickedRoverId(clickedRover)
  }

  const handleRoverMovement = (movementData) => {
    let roversCopyArray = [...roversState] //* spreading to scoop out the data in roversState and making an immutable copy array
    //* mapping over roversCopyArray to check if the roverId matches the movementData.roverId -> if false return same rover, if true update the rover in it's new position
    roversCopyArray = roversCopyArray.map(rover => {
      if (rover.roverId === movementData.roverId) {
        //* returning a new rover object for the roversCopyArray containing the rover's new position
        return {
          roverId: movementData.roverId,
          currentPosition: {
            x: movementData.newPosition.x,
            y: movementData.newPosition.y,
            position: movementData.newPosition.position
          },
          roverMovements: movementData.movementsArray
        }
      } else {
        //* return existing rover in it's current position
        return rover
      }
    })
    setRoversState(roversCopyArray) //* updating the rover's state through setting the roversCopyArray to state
    //! REF: updating the clickedRoverId state in order for the cell highlighted (where the rover has been clicked) in the GridRow compoenent to update
    setClickedRoverId({
      roverId: movementData.roverId,
      x: movementData.newPosition.x,
      y: movementData.newPosition.y
    })
  }

  let printRows = (
    <div>
      {/* <RoverNew /> */}
      <div className='grid-wrapper'>
        {gridState.map((cells, i) => {
          return <GridRow key={i} cells={cells} rovers={roversState} handleClick={handleClick} clickedRover={clickedRoverId} />
        })}
      </div>
      {/* <RoverNewMovement roverId={clickedRoverId.roverId} handleMove={handleRoverMovement} /> */}
    </div>
  )

  return (
    <div>
      { !isLoading ? printRows : null}
    </div>
  )


}

export default Main





// useEffect(() => {
  //   const fetchRovers = async () => {
  //     try {
  //       const res = await getAllRovers()
  //       console.log(res)
  //       let rovers = []
  //       //* mapping through array of rovers, and pushing the roverId, currentPosition and the empty roverMovements into the rovers array
  //       res.data.map(rover => {
  //         rovers.push({
  //           roverId: rover._id,
  //           currentPosition: {
  //             x: rover.x,
  //             y: rover.y,
  //             position: rover.position
  //           },
  //           roverMovements: []
  //         })
  //         setRoversState(rovers) //* setting the rovers array to state
  //       })

  //       setIsLoading(false) //! Now that the grid is ready and the fetch of the rovers is completed and are set to state with setRoversState
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   //* if gridstate's length is larger than 1 then call fetchRovers function
  //   if (gridState.length > 1) {
  //     fetchRovers()
  //   }
  // }, [gridState]) //* now every time gridState changes the function will run again






