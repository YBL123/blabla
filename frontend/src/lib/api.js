import axios from 'axios'


export const getAllRovers = () => {
  return axios.get('/api/rovers')
}