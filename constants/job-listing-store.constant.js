const MODULE_NAMESPACE = 'job-listing';

export const FETCH_JOB_LIST = 'FETCH_JOB_LIST';
export const FETCH_JOB_LIST_DETAIL = 'FETCH_JOB_LIST_DETAIL';

export const GET_JOB_LIST = 'GET_JOB_LIST';
export const GET_JOB_LIST_DETAIL = 'GET_JOB_LIST_DETAIL';
export const GET_JOB_LIST_PAGE = 'GET_JOB_LIST_PAGE';
export const GET_JOB_LIST_PAGES = 'GET_JOB_LIST_PAGES';

export const SET_JOB_LIST = 'SET_JOB_LIST';
export const SET_JOB_LIST_DETAIL = 'SET_JOB_LIST_DETAIL';

export const JOB_LIST = 'JOB_LIST';
export const JOB_LIST_DETAIL = 'JOB_LIST_DETAIL';
export const JOB_LIST_PAGE = 'JOB_LIST_PAGE';
export const JOB_LIST_PAGES = 'JOB_LIST_PAGES';

export const jobListingModuleNamespace = constant => {
  return MODULE_NAMESPACE + '/' + constant;
};
