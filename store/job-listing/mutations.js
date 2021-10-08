import {
  SET_JOB_LIST,
  JOB_LIST,
} from '../../constants/job-listing-store.constant';

export default {
  [SET_JOB_LIST](state, payload) {
    state[JOB_LIST] = payload;
  },
};
