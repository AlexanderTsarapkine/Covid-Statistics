let sourceApi = 'https://api.covid19api.com/summary';
let generatedRestAPI = 'http://3.19.229.184/';

fetch(sourceApi)
.then((res) => res.json())
.then((data) => {
 
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
       
        if(key === 'Country' || key === 'TotalConfirmed' || key === 'TotalDeaths' || key === 'TotalRecovered'){
          let cell = row.insertCell();
          let text = document.createTextNode(element[key]);
          cell.appendChild(text);
        }
      }
    }
  }
  
  let table = document.getElementById("countryTable");
  generateTable(table , data.Countries);

})

function getCountryData(){
  return data.Countries;
}