import services from '@/services/index.js';
import createHttpClient from './create-http-client';

export default (context, inject) => {
  const $http = createHttpClient(context.$axios, context.store, context);

  const $services = {
    $http,
    ...services($http, context.store, context),
  };

  inject('services', $services);
};
