import { createJobApiGwClient } from './job-api-gw-client';

export default (context, inject) => {
  const jobApiGwClient = createJobApiGwClient(context);

  const $apiClient = {
    jobApiGwClient,
  };

  inject('apiClient', $apiClient);
};
