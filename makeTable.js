let sourceApi = 'https://api.covid19api.com/summary';
let generatedRestAPI = 'http://3.19.229.184/';

fetch(sourceApi)
.then((res) => res.json())
.then((data) => {

  let table = document.getElementById("alphabet");
  generateTable(table , data.Countries);
  setData(data.Countries);
})

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      if(key === 'Country' || key === 'TotalConfirmed' || key === 'TotalDeaths' || key === 'TotalRecovered'){
        let cell = row.insertCell();
        let text;
        if(key != 'Country'){
          text = document.createTextNode((element[key]).toLocaleString('en'));
        }
        else{
          text = document.createTextNode(element[key]);
        }
        cell.appendChild(text);
      }
    }
  }
}
