
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function reqListener () {
    console.log(this.responseText);
    //make table here
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://localhost:3000/getStats");
  oReq.send();
