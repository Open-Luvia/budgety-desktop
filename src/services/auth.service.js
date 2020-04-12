import axios from 'axios'

const apiClient = axios.create({
   baseURL: 'http://tdw-api.mooo.com/api',
   headers: {
      'Content-Type': 'application/json',
   },
   timeout: 1000
})

export default {
   sendRegistrationCredentials(credentials) {
      return apiClient.post('/users/register', credentials)
   },
   sendLoginCredentials(credentials) {
      return apiClient.post('/users/login', credentials)
   }
}
