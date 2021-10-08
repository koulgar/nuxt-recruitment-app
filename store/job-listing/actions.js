import {
  FETCH_JOB_LIST,
  SET_JOB_LIST,
} from '../../constants/job-listing-store.constant';

export default {
  async [FETCH_JOB_LIST]({ commit }) {
    const { data } = await this.$services.jobService.fetchJobList();
    commit(SET_JOB_LIST, data);
  },
};
