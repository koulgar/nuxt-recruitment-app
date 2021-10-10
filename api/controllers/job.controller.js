const express = require('express');
const jobList = require('../../data/job-list.fixture.json');
const jobListDetail = require('../../data/job-list-detail.fixture.json');
const DEFAULT_PAGE_SIZE = 16;

const router = express.Router();

const getCurrentPage = request => {
  if (request && request.query && request.query.page) return request.query.page;
  return 1;
};

const getTotalPageCount = total => {
  return Math.ceil(total / DEFAULT_PAGE_SIZE);
};

const getItemsByPageAndPageSize = page => {
  jobList.sort((a, b) => a.durationDay - b.durationDay);
  return jobList.slice(
    (page - 1) * DEFAULT_PAGE_SIZE,
    page * DEFAULT_PAGE_SIZE
  );
};

router.get('/', (request, response) => {
  const page = getCurrentPage(request);
  const items = getItemsByPageAndPageSize(page);
  const total = jobList.length;
  const pages = getTotalPageCount(total);
  response.status(200).json({ items, total, pages, page });
});

router.get('/:id', (request, response) => {
  const jobDetail = jobListDetail.find(job => job.id === request.params.id);
  if (!jobDetail) {
    response.status(404).json({
      exception: 'JobIdNotFoundException',
      message: 'Job with requested id is not present.',
    });
    return;
  }
  response.status(200).json({ result: jobDetail });
});

module.exports = router;
