import axios from 'axios';

const api = axios.create({
  baseURL: 'http://21.21.21.11:3333',
});

export default api;
