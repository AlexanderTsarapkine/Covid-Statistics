const fetch = require("node-fetch");


// Gets object storing data from each country and globally from API
const url = 'https://api.covid19api.com/summary';

let countryStat = [];
let globalStat;

fetch(url)
.then((res) => res.json())
.then((data) => {
 data.Countries.forEach(function(country) {
  countryStat.push(country);
 });
 console.log(countryStat);
 globalStat = data.Global;
  console.log(globalStat);
})

//returns countryStat
function getCountryStat() {
  return countryStat;
}

//returns globalStats
function getGlobalStat() {
  return globalStat;
}