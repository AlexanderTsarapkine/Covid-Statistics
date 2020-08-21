
//4 different sorting options

let alpha = document.getElementById("alphabet");
let confirmed = document.getElementById("confirm");
let death = document.getElementById("death");
let recovered = document.getElementById("recovered");


function setData(data) {
    makeConfirmed(data);
    makeDeath(data);
    makeRecovered(data);  
}

//document.getElementById("buttonCountry").addEventListener("click", myFunction);
//setTimeout(function(){ console.log(totalChl); }, 3000);

function makeConfirmed(data){
    let totalChl = data.sort(function(a, b) {return a.TotalConfirmed - b.TotalConfirmed;});
    totalChl.reverse();
    generateTable(confirmed, totalChl);
    confirmed.style.display = "none";
}

function makeDeath(data){
    let totalDhl = data.sort(function(a, b) {return a.TotalDeaths - b.TotalDeaths;});
    totalDhl.reverse();
    generateTable(death, totalDhl);
    death.style.display = "none";
}

function makeRecovered(data){
    totalRhl = data.sort(function(a, b) {return a.TotalRecovered - b.TotalRecovered;});
    totalRhl.reverse();
    generateTable(recovered,totalRhl);
    recovered.style.display = "none";
}

function alphabe() {
    
         if (alpha.style.display === "none") {
            console.log(alpha);
            confirmed.style.display = "none";
            death.style.display = "none";
            recovered.style.display = "none";
            alpha.style.display = "block";
        
    }   
  } 

  function confirme() {
    
         if (confirmed.style.display === "none") {
            console.log(confirmed);
            confirmed.style.display = "block";
            death.style.display = "none";
            recovered.style.display = "none";
            alpha.style.display = "none";
        
    }   
  } 

  function deat() {
    
         if (death.style.display === "none") {
            console.log(death);
            confirmed.style.display = "none";
            death.style.display = "block";
            recovered.style.display = "none";
            alpha.style.display = "none";
        }
     
  } 

  function recovere() {
    
         if (recovered.style.display === "none") {
            console.log(recovered);
            confirmed.style.display = "none";
            death.style.display = "none";
            recovered.style.display = "block";
            alpha.style.display = "none";
        
    }   
  } 