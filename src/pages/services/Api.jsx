import axios from 'axios'
 
 // base da Url: https://api.themoviedb.org/3/
// Url Api: https://api.themoviedb.org/3/movie/now_playing?api_key=c879529cb175ed099303c511c453701d&language=pt-BR

export const api = axios.create({baseURL:'https://api.themoviedb.org/3/'})