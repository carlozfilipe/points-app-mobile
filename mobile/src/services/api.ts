import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.18.47.33:3333',
  Add upload folder in gitignore  //baseURL: 'http://172.18.131.65:3333',
});

export default api;