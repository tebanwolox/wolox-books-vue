import { create } from 'apisauce'
import { environment } from '../environments/environments'

const api = create({
  baseURL: `${environment.WBOOK_SERVICE}/api/v1`
})

export const registerUser = (user) => api.post('/users', { user })
