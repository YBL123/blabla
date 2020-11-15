import axios from 'axios'

const withHeaders = () => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  return {
    headers: headers
  }
}

//GET ALL
export const getAllRovers = () => {
    return axios.get('/api/rovers')
}

//CREATE
export const newRover = formData => {
    return axios.post('/api/rovers', formData, withHeaders())
}

//UPDATE/MOVE
export const moveRover = (roverId, formData) => {
  return axios.put(`/api/rovers/${roverId}`, formData, withHeaders())
}

//GET SINGLE 
export const getSingleRover = roverId => {
  try {
    return axios.get(`/api/rovers/${roverId}`)
  } catch (error) {
    console.log(error)
  }
}

//DELETE
export const deleteRover = roverId => {
  return axios.delete(`/api/rovers/${roverId}`, withHeaders())
}