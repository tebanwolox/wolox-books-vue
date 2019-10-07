import { create } from 'apisauce'

export const api = create({
  baseURL: process.env.WBOOK_SERVICE_BASE_URL
})
