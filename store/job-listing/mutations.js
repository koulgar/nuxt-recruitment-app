import {
  JOB_LIST_PAGE,
  JOB_LIST_PAGES,
  SET_JOB_LIST,
  SET_JOB_LIST_DETAIL,
  JOB_LIST,
  JOB_LIST_DETAIL,
} from '../../constants/job-listing-store.constant';

const setDistanceText = items => {
  items.forEach(item => {
    const dist = item.distance;
    const distInMeters = dist * 1000;
    item.distanceText =
      dist >= 1 ? `${dist} km yakınında` : `${distInMeters} m yakınında`;
  });
};

const setDurationDayText = items => {
  items.forEach(item => {
    const duration = item.durationDay;
    let text;
    switch (duration) {
      case 0:
        text = 'Bugün';
        break;
      case 1:
        text = 'Dün';
        break;
      default:
        text = `${duration} gün önce`;
        break;
    }
    item.durationDayText = text;
  });
};

export default {
  [SET_JOB_LIST](state, payload) {
    setDistanceText(payload.items);
    setDurationDayText(payload.items);
    state[JOB_LIST] = payload.items;
    state[JOB_LIST_PAGE] = payload.page;
    state[JOB_LIST_PAGES] = payload.pages;
  },
  [SET_JOB_LIST_DETAIL](state, payload) {
    state[JOB_LIST_DETAIL] = payload.result;
  },
};
