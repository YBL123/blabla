import React, { useState } from 'react'
import {  moveRover } from '../lib/api'

import RoverMovementForm from './RoverMovementForm'

const RoverMovement = (props) =>  {

  const {roverId, handleMove} = props
  const [formData, setFormDataState] = useState('')


  const handleChange = event => {
    // const errors = { ...this.state.errors, [event.target.name]: ''}
    setFormDataState(event.target.value) //* add ,erros in here
  }

  const handleSubmit = async event => {

    event.preventDefault()

    try {
      const res = await moveRover({id: roverId, movement: formData})
      handleMove(res.data)
    } catch (error) {
      console.log(error)
      // this.setState({ errors: error.response.data.errors })
    }
  }


    return (
      <section className="section">
        <div className="container">
          <RoverMovementForm
            formData={formData}
            // errors={this.state.errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText="Move Rover"
          />
        </div>
      </section>
    )
  

}

export default RoverMovement