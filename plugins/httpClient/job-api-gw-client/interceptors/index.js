import onRequestInterceptor from './on-request.interceptor';
import onErrorInterceptor from './on-error.interceptor';

export default (http, context) => {
  http.onRequest(request => onRequestInterceptor(request, context));
  http.onError(error => onErrorInterceptor(error, context));
};
