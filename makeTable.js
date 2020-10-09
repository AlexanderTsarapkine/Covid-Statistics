let sourceApi = 'https://api.covid19api.com/summary'; //original API url
let generatedRestAPI = 'http://3.19.229.184/';        //our generated rest api url


//retries API data in form of a json file
fetch(sourceApi)
.then((res) => res.json())
.then((data) => {

  let table = document.getElementById("alphabet"); //gets table location from index.html
  generateTable(table , data.Countries);  
  setData(data.Countries);
})

//this function fills in the selecteed table with the data from the API
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow(); //creates a new row in the selected table
    for (key in element) {
      //for each column
      if(key === 'Country' || key === 'TotalConfirmed' || key === 'TotalDeaths' || key === 'TotalRecovered'){
        let cell = row.insertCell();//insters text into cell
        let text; //the peice of text that goes in a table box
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

