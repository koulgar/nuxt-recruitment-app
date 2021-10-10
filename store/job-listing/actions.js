import {
  FETCH_JOB_LIST,
  FETCH_JOB_LIST_DETAIL,
  SET_JOB_LIST,
  SET_JOB_LIST_DETAIL,
} from '../../constants/job-listing-store.constant';

export default {
  async [FETCH_JOB_LIST]({ commit }, page) {
    const { data } = await this.$services.jobService.fetchJobList(page);
    commit(SET_JOB_LIST, data);
  },
  async [FETCH_JOB_LIST_DETAIL]({ commit }, jobId) {
    const { data } = await this.$services.jobService.fetchJobListDetail(jobId);
    commit(SET_JOB_LIST_DETAIL, data);
  },
};
