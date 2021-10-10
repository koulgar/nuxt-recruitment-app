import initInterceptors from './interceptors';
const baseURL = 'http://localhost:3000/api';
const timeout = 5000;

export const createJobApiGwClient = context => {
  const jobApiGwClient = context.$axios.create({
    baseURL,
    timeout,
  });
  initInterceptors(jobApiGwClient, context);
  return jobApiGwClient;
};
