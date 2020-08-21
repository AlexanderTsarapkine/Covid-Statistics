//main api call to be used
const express = require("express");
const fetch = require("node-fetch");
const port = process.env.PORT;

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

app.listen(port, () => {
 console.log(`Listening on port: ${port}`);
})