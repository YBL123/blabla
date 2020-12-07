import React, { useState } from 'react'
import { moveRover } from '../lib/api'

import RoverMovementForm from './RoverMovementForm'

const RoverMovement = (props) => {

  const { roverId, handleMove } = props

  const [formData, setFormDataState] = useState('')
  // const [formData, setFormDataState] = useState({
  //   movement: ''
  // })

  const [errors, setErrorsState] = useState('')


  const handleChange = event => {
    setErrorsState({ ...errors, [event.target.name]: '' })
    setFormDataState(event.target.value)
  }

  const handleSubmit = async event => {

    event.preventDefault()

    try {
      const request = {
        movement: formData.movement
      }
      if (!errorHandler(request)) {
        const res = await moveRover(request)
        // const res = await moveRover({ id: roverId, movement: formData })
        if (res.status === 201) {
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


    // Error Check

    //movment
    if (typeof request.movement !== 'string') {
      isError = true
      errorObj.movement = 'Invalid movment'
    }
    // } else if (
    //   request.movement !== 'l' ||
    //   request.movement !== 'L' ||
    //   request.movement !== 'r' ||
    //   request.movement !== 'R' ||
    //   request.movement !== 'm' ||
    //   request.movement !== 'M'
    // ) {
    //   isError = true
    //   errorObj.movment = 'Invalid movement'
    // }


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