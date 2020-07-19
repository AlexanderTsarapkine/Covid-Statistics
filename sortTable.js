//let dataArray = getCountryData();
document.getElementById("buttonCountry").addEventListener("click", myFunction);
function myFunction() {
    console.log("eneted");
    var x = document.getElementById("countryTable");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }