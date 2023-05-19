import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3', 
    params: {
    api_key: '6a88d073ac9fcdee5b04350b236a7b5d',
    language: 'pt-BR',
    page: 1
    } 
})

export default api 