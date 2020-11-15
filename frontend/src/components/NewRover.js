import React from 'react'
import { newRover } from '../lib/api'

import NewRoverForm from './NewRoverForm'


class NewRover extends React.Component {
  state = {
    formData: {
      x: '',
      y: '',
      position: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }

    const errors = { ...this.state.errors, [event.target.name]: ''}
    this.setState({ formData, errors })
    
  }

  handleSubmit = async event => {
    event.preventDefault()
    
    try {
      const res = await newRover(this.state.formData) 
      console.log('this is rover res', res)
      console.log('rover data id', res.data._id)
      this.props.history.push(`/rovers/${res.data._id}`)
    } catch (error) {
      console.log(error.response)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <NewRoverForm
            formData={this.state.formData}
            // errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Delpoy New Rover"
          />
        </div>
      </section>
    )
  }

}


export default NewRover
