import React, { useState, useEffect } from 'react'
import { newRover } from '../lib/api'

import RoverForm from './RoverForm'


const NewRover = (props) => {

  const {handleNewRover} = props

  const [formData, setFormDataState ] = useState({
    x: '',
    y: '',
    position: ''
  })
  
  const [errors, setErrorsState] = useState({
    x: '',
    y: '',
    position: ''
  })

  const handleChange = event => {
    setErrorsState({ ...errors, [event.target.name]: '' })
    setFormDataState({ ...formData, [event.target.name]: event.target.value }) //add errors back in later 
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    try {
      const request = {
        x: formData.x,
        y: formData.y,
        position: formData.position
      }
      if (!errorHandler(request)) {
        const res = await newRover(formData)
        if (res.status === 201) {
          handleNewRover(res.data)
        } 
      }
      
    } catch (error) {
      console.log(error.response)
    }
  }

  const errorHandler = (request) => {
    let isError = false
    let errorObj = {}


    // Error Check

    //x
    if (isNaN(request.x)) {
      isError = true
      errorObj.x = 'Invalid x coordinate'
    } else if (request.x > 5 || request.x < 0) {
      isError = true
      errorObj.x = 'x must be between 0 - 5'
    }

    //y
    if (isNaN(request.y)) {
      isError = true
      errorObj.y = 'Invalid y coordinate'
    } else if (request.y > 5 || request.y < 0) {
      isError = true
      errorObj.y = 'y must be between 0 - 5'
    }

    //position
    if (typeof(request.position) !== String) {
      isError = true
      errorObj.position = 'Invalid position'
    } else if (request.position.length > 1 ) {
      isError = true
      errorObj.position = 'Invalid positing length'
    } else if (
      request.position !== 'n' ||
      request.position !== 'N' ||
      request.position !== 'e' ||
      request.position !== 'E' ||
      request.position !== 's' ||
      request.position !== 'S' ||
      request.position !== 'w' ||
      request.position !== 'W' 
      ) {
        errorObj.position = 'Invalid position'
      }


    setErrorsState({ ...errors, ...errorObj })

    return isError
  }


    return (
      <section className="section">
        <div className="container">
          <RoverForm
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText="Delpoy Rover"
          />
        </div>
      </section>
    )

}


export default NewRover
