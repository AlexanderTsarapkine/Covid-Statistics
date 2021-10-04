/*
Authors: Luka Grahek, Alexander Tsarapkine
July-August 2020

*/
const express = require("express");   //import Express.js
const fetch = require("node-fetch");  //import node-fetch
const port = process.env.PORT || 3000;        //create a port for the rest API

const covidSummaryurl = 'https://api.covid19api.com/summary';   //constant API url 
const app = express();  //create express app


//send a get request to the API
app.get('/getStats', (req, res) =>
{
  fetch(covidSummaryurl)
  .then((res) => res.json())
  .then((data) => {
    res.send(data);
  });
})

//launches local port
app.listen(port, () => {
 console.log(`Listening on port: ${port}`);
})