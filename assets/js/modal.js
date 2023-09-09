// Get the modal
// PEA
var peamodal = document.getElementById("PEAModal");
var peaamodal = document.getElementById("PEAAModal");
var peabmodal = document.getElementById("PEABModal");
var peacmodal = document.getElementById("PEACModal");
var peadmodal = document.getElementById("PEADModal");

// Get the button that opens the modal
// PEA
var pea = document.getElementById("PEA");
var peaa = document.getElementById("PEAA");
var peab = document.getElementById("PEAB");
var peac = document.getElementById("PEAC");
var pead = document.getElementById("PEAD");


// When the user clicks on the button, open the modal
// PEA
pea.onclick = function() {
  peamodal.style.display = "block";
}
peaa.onclick = function() {
    peaamodal.style.display = "block";
}
peab.onclick = function() {
    peabmodal.style.display = "block";
}
peac.onclick = function() {
    peacmodal.style.display = "block";
}
pead.onclick = function() {
    peadmodal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == peamodal) {
    peamodal.style.display = "none";
  }
  if (event.target == peaamodal) {
    peaamodal.style.display = "none";
  }
  if (event.target == peabmodal) {
    peabmodal.style.display = "none";
  }
  if (event.target == peacmodal) {
    peacmodal.style.display = "none";
  }
  if (event.target == peadmodal) {
    peadmodal.style.display = "none";
  }
}