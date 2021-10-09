const MODULE_NAMESPACE = 'job-listing';

export const FETCH_JOB_LIST = 'FETCH_JOB_LIST';
export const GET_JOB_LIST = 'GET_JOB_LIST';
export const SET_JOB_LIST = 'SET_JOB_LIST';
export const JOB_LIST = 'JOB_LIST';

export const jobListingModuleNamespace = constant => {
  return MODULE_NAMESPACE + '/' + constant;
};
