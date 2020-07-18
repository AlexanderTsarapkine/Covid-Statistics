
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function reqListener () {
    const data = this.responseText;
    
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
    generateTable(table, data.Countries);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://localhost:3000/getStats");
  oReq.send();
