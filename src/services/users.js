import { api } from '../config/api'

export const registerUser = user => api.post('/users', { user })

export const getSession = session => api.post('/users/sessions', { session })
