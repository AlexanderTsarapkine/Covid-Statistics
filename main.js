const fetch = require("node-fetch");

const url = 'https://api.covid19api.com/world/total';

fetch(url)
.then((res) => res.json())
.then((data) => {
  console.log(data);
})