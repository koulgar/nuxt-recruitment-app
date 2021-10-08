import initInterceptors from './interceptors';
const baseURL = 'http://localhost:3000/api';
const timeout = 5000;

export default ($axios, store, context) => {
  const http = $axios.create({
    baseURL,
    timeout,
  });
  initInterceptors(http, store, context);
  return http;
};
