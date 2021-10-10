import {
  JOB_LIST_PAGE,
  JOB_LIST_PAGES,
  SET_JOB_LIST,
  SET_JOB_LIST_DETAIL,
  JOB_LIST,
  JOB_LIST_DETAIL,
} from '../../constants/job-listing-store.constant';

export default {
  [SET_JOB_LIST](state, payload) {
    state[JOB_LIST] = payload.items;
    state[JOB_LIST_PAGE] = payload.page;
    state[JOB_LIST_PAGES] = payload.pages;
  },
  [SET_JOB_LIST_DETAIL](state, payload) {
    state[JOB_LIST_DETAIL] = payload.result;
  },
};
