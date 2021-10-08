const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.json());
app.get('/test/:id', (request, response) => {
  response.json({ hello: request.params.id });
});

module.exports = app;
