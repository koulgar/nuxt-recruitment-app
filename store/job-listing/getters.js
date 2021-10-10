import {
  GET_JOB_LIST_DETAIL,
  GET_JOB_LIST_PAGE,
  GET_JOB_LIST_PAGES,
  GET_JOB_LIST,
  JOB_LIST_PAGES,
  JOB_LIST_PAGE,
  JOB_LIST_DETAIL,
  JOB_LIST,
} from '../../constants/job-listing-store.constant';

export default {
  [GET_JOB_LIST](state) {
    return state[JOB_LIST];
  },
  [GET_JOB_LIST_DETAIL](state) {
    return state[JOB_LIST_DETAIL];
  },
  [GET_JOB_LIST_PAGE](state) {
    return state[JOB_LIST_PAGE];
  },
  [GET_JOB_LIST_PAGES](state) {
    return state[JOB_LIST_PAGES];
  },
};
