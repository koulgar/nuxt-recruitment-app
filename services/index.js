import { createJobService } from './job.service';

export default (context, inject) => {
  const jobService = createJobService(context);
  const $services = {
    jobService,
  };
  inject('services', $services);
};
