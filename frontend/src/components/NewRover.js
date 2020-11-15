import React, { useState, useEffect } from 'react'
import { newRover } from '../lib/api'

import RoverForm from './RoverForm'


const NewRover = (props) => {

  const [formData, setFormDataState ] = useState({
    x: '',
    y: '',
    position: ''
  })
  const {handleNewRover} = props

  const handleChange = event => {
    // const errors = { ...errors, [event.target.name]: ''} // shouldn't go here
    setFormDataState({ ...formData, [event.target.name]: event.target.value }) //add errors back in later 
  }

  const handleSubmit = async event => {
    event.preventDefault()
    
    try {
      const res = await newRover(formData) 
      handleNewRover(res.data)
    } catch (error) {
      console.log(error.response)
    }
  }


    return (
      <section className="section">
        <div className="container">
          <RoverForm
            formData={formData}
            // errors={this.state.errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            buttonText="Delpoy New Rover"
          />
        </div>
      </section>
    )

}


export default NewRover
