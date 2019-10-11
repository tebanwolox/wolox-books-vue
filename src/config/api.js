import { create } from 'apisauce'

export const api = create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

export const addAuth = token => {
  api.setHeaders({
    Authorization: token
  })
}

export const removeAuth = () => {
  api.setHeaders({
    Authorization: ''
  })
}
