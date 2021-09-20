const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = addDays(new Date(), 100);
  let result = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  response.send(result);
});

app.listen(3000);
module.exports = app;
