import axios from 'axios'

const API_URL = 'https://homolog.planetasec.com.br/prova/front/api/' // API REST

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: API_URL
})

export default api