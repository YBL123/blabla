import React, { useEffect, useState } from 'react'
import { moveRover } from '../lib/api'

import RoverMovementForm from './RoverMovementForm'

const RoverMovement = (props) => {

  const { roverId, handleMove } = props

  const [formData, setFormDataState] = useState({
    movement: '',
    roverId: ''
  })

  const [errors, setErrorsState] = useState({
    movement: ''
  })

useEffect(() => {
  setFormDataState({ ...formData, roverId: roverId })
}, [roverId])

  const handleChange = event => {
    setErrorsState({ ...errors, [event.target.name]: '' })
    setFormDataState({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {

    event.preventDefault()

    try {
      const request = {
        movement: formData.movement,
        id: formData.roverId
      }
      if (!errorHandler(request)) {
        const res = await moveRover(request)
        if (res.status === 200) {
          handleMove(res.data)
        }
      }

    } catch (error) {
      console.log(error)
    }
  }

  const errorHandler = (request) => {
    let isError = false
    let errorObj = {}


    //Error Check

    //movment
    if (!isNaN(request.movement)) {
      isError = true
      errorObj.movement = 'Invalid movment'
    } 
    const reqSplit = request.movement.toLowerCase().split('')
    for( let i = 0; i < reqSplit.length; i++) {
      if (reqSplit[i] !== 'l' && reqSplit[i] !== 'r' && reqSplit[i] !== 'm') {
        isError = true
        errorObj.movement = 'Invalid movment'
      }
    }
      setErrorsState({ ...errors, ...errorObj })

    return isError
  }

  return (
    <section className="section">
      <div className="container">
        <RoverMovementForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Move Rover"
        />
      </div>
    </section>
  )
}

export default RoverMovement