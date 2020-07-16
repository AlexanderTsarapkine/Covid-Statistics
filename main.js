const fetch = require("node-fetch");

fetch('https://api.covid19api.com/world/total')
.then((res) => res.json())
.then((data) => {
  console.log(data);
})