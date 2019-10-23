import { create } from 'apisauce'
import { getToken } from '../services/localStorage'

export const api = create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

api.addRequestTransform(req => {
  if (!req.headers['Authorization']) req.headers['Authorization'] = getToken()
})

export const isAuth = () => api.headers['Authorization'] || getToken()
