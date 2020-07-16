const fetch = require("node-fetch");


// Gets object storing data from each country from API
const url = 'https://api.covid19api.com/summary';

fetch(url)
.then((res) => res.json())
.then((data) => {

 let countryStats = [];
 data.Countries.forEach(function(country) {
  countryStats.push(country);
 });

 console.log(countryStats);
  
})