import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.advalentina1.com.br/usuario/',
});

export default api;
