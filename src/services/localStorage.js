import { addAuth, removeAuth } from '../config/api'

export const setToken = value => {
  window.localStorage.setItem('token', value)
  addAuth(value)
}

export const getToken = () =>
  window.localStorage.getItem('token')

export const removeToken = () => {
  window.localStorage.removeItem('token')
  removeAuth()
}
