import { create } from 'apisauce'

export const api = create({
  baseURL: process.env.VUE_APP_BASE_URL
})