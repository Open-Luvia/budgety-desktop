import axios from 'axios'

export default axios.create({
   baseURL: 'http://tdw-api.mooo.com/api',
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   },
   timeout: 1000
})