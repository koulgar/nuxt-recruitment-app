import onRequestInterceptor from './on-request.interceptor';
import onErrorInterceptor from './on-error.interceptor';

export default (http, store, context) => {
  http.onRequest(request => onRequestInterceptor(request, store, context));
  http.onError(error => onErrorInterceptor(error, store, context));
};
