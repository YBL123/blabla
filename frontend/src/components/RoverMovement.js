import React from 'react'
import { getSingleRover, moveRover } from '../lib/api'

import RoverForm from './RoverForm'

class RoverMovement extends React.Component {
  state = {
    formData: {
      x: '',
      y: '',
      position: ''
    }
  }

  async componentDidMount() {
    // const roverId = this.props
    const roverId = this.props
    console.log('testing testing',roverId)

    try {
      const res = await getSingleRover(roverId)
      this.setState({ formData: res.data })  
    } catch (err) {
      // this.props.history.push('/notfound')
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }

    // const errors = { ...this.state.errors, [event.target.name]: ''}
    this.setState({ formData }) //* add ,erros in here
  }

  handleSubmit = async event => {

    event.preventDefault()

    const roverId = this.props.match.params.id

    try {
      await moveRover(roverId, this.state.formData)

      this.props.history.push(`/rovers/${roverId}`)
    } catch (error) {
      console.log(error)
      // this.setState({ errors: error.response.data.errors })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <RoverForm
            formData={this.state.formData}
            // errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            buttonText="Move Rover"
          />
        </div>
      </section>
    )
  }


}

export default RoverMovement