const bodyParser = require('body-parser');
const app = require('express')();
const jobList = require('../fixtures/job-list.fixture.json');
const DEFAULT_PAGE_SIZE = 16;

const getCurrentPage = request => {
  return request.query?.page || 1;
};

const getTotalPageCount = total => {
  return Math.ceil((total + DEFAULT_PAGE_SIZE - 1) / DEFAULT_PAGE_SIZE);
};

const getItemsByPageAndPageSize = page => {
  return jobList.slice(
    (page - 1) * DEFAULT_PAGE_SIZE,
    page * DEFAULT_PAGE_SIZE
  );
};

app.use(bodyParser.json());
app.get('/joblist', (request, response) => {
  const page = getCurrentPage(request);
  const items = getItemsByPageAndPageSize(page);
  const total = jobList.length;
  const pages = getTotalPageCount(total);
  response.json({ items, total, pages, page });
  response.status(200);
});

module.exports = app;
