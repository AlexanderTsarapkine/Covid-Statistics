
/*
There are four differeent sorting options avaliable to choose from
*/

let alpha = document.getElementById("alphabet");      //retries the first column of the table (country name) sorted alphabetically
let confirmed = document.getElementById("confirm");   //retries the second column of the table (confirmed cases) sorted numerically
let death = document.getElementById("death");         //retries the third column of the table (deaths) sorted numerically
let recovered = document.getElementById("recovered"); //retries the fourth column of the table (recovered) sorted numerically

//sends all of the data to create 3 more addition tables that will be sorted (4 tables in total)
function setData(data) {
    makeConfirmed(data);
    makeDeath(data);
    makeRecovered(data);  
}

//creates a table sorted by the amount of confirmed cases a country has
function makeConfirmed(data){
    let totalChl = data.sort(function(a, b) {return a.TotalConfirmed - b.TotalConfirmed;});
    totalChl.reverse();
    generateTable(confirmed, totalChl);
    confirmed.style.display = "none";
}

//creates a table sorted by the amount of deaths a country has
function makeDeath(data){
    let totalDhl = data.sort(function(a, b) {return a.TotalDeaths - b.TotalDeaths;});
    totalDhl.reverse();
    generateTable(death, totalDhl);
    death.style.display = "none";
}

//creates a table sorted by the amount of recovered patients a country has
function makeRecovered(data){
    totalRhl = data.sort(function(a, b) {return a.TotalRecovered - b.TotalRecovered;});
    totalRhl.reverse();
    generateTable(recovered,totalRhl);
    recovered.style.display = "none";
}

//hides the aplhabetically sorted country names table, and displays it when its button is pressed
function alphabe() {
         if (alpha.style.display === "none") {
            console.log(alpha);
            confirmed.style.display = "none";
            death.style.display = "none";
            recovered.style.display = "none";
            alpha.style.display = "block";
        }   
  } 

//hides the sorted confirmed cases table, and displays it when its button is pressed
  function confirme() {
         if (confirmed.style.display === "none") {
            console.log(confirmed);
            confirmed.style.display = "block";
            death.style.display = "none";
            recovered.style.display = "none";
            alpha.style.display = "none";
        }   
  } 

  //hides the sorted deaths table, and displays it when its button is pressed
  function deat() {
         if (death.style.display === "none") {
            console.log(death);
            confirmed.style.display = "none";
            death.style.display = "block";
            recovered.style.display = "none";
            alpha.style.display = "none";
        }
  } 

  //hides the recovered patients tabletable, and displays it when its button is pressed
  function recovere() {
         if (recovered.style.display === "none") {
            console.log(recovered);
            confirmed.style.display = "none";
            death.style.display = "none";
            recovered.style.display = "block";
            alpha.style.display = "none";
        }   
  } 