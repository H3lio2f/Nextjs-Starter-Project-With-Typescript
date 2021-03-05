import Axios from 'axios'

const urls = {
  test: 'https://endpoint/',
  development: 'https://endpoint/',
  production: 'https://endpoint/'
}
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
