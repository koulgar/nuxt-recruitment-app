import {
  FETCH_JOB_LIST,
  FETCH_JOB_LIST_DETAIL,
  SET_JOB_LIST,
  SET_JOB_LIST_DETAIL,
} from '../../constants/job-listing-store.constant';

export default {
  async [FETCH_JOB_LIST]({ commit }, page) {
    const jobList = await this.$services.jobService.findAll(page);
    commit(SET_JOB_LIST, jobList);
  },
  async [FETCH_JOB_LIST_DETAIL]({ commit }, jobId) {
    const job = await this.$services.jobService.find(jobId);
    commit(SET_JOB_LIST_DETAIL, job);
  },
};
