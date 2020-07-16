const fetch = require("node-fetch");
const express = require("express");
const port = 3000; //fix later (multiple ports etc) also might have to set up another aws this to store rest api thing

const covidSummaryurl = 'https://api.covid19api.com/summary';
const app = express();

app.get('/getStats', (req, res) =>
{
  fetch(covidSummaryurl)
  .then((res) => res.json())
  .then((data) => {
    res.send(data);
  });
})

app.listen(3000, () => {
  console.log(`listening on port 3000`);
})