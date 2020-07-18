let sourceApi = 'https://api.covid19api.com/summary';
let generatedRestAPI = 'http://3.19.229.184/';

fetch(sourceApi)
.then((res) => res.json())
.then((data) => {
  console.log(data);
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        console.log(key);
        if(key === 'Country' || key === 'TotalConfirmed' || key === 'TotalDeaths' || key === 'TotalRecovered'){
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
  }
  
  let table = document.querySelector("table");
  generateTable(table , data.Countries);

})