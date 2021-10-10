const bodyParser = require('body-parser');
const app = require('express')();
const jobController = require('./controllers/job.controller');

app.use(bodyParser.json());
app.use('/job', jobController);

module.exports = app;
