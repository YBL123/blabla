import React, { useState, useEffect } from 'react'
import { deleteRover } from '../lib/api'

const DeleteRover = ({ roverId }) => {

  const [error, setErrorState] = useState('')

  useEffect(() => {
    if (roverId !== undefined) {
      setErrorState('')
    }
  }, [roverId])

  const onClick = async () => {
    if (roverId === undefined) {
      setErrorState('Please click on the rover you would like to remove')
    }
    try {
      const res = await deleteRover(roverId)

      if (res.status !== 204) {
        console.log('could not delete')
      }
    } catch (error) {
      console.log(error)
    }

  }

  const displayError = (<h3>{error}</h3>)

  return (
    <div>
      <button onClick={onClick} className="delete-rover-button">Remove Rover</button>
      {error !== '' ? displayError : null}
    </div>
  )
}

export default DeleteRover
