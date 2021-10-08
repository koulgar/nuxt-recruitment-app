import jobService from './job.service';

export default ($http, store, context) => ({
  jobService: jobService($http, store, context),
});
