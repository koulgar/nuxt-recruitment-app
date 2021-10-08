import {
  GET_JOB_LIST,
  JOB_LIST,
} from '../../constants/job-listing-store.constant';

export default {
  [GET_JOB_LIST](state) {
    return state[JOB_LIST];
  },
};
