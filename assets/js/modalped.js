// PED
var pedmodal = document.getElementById("PEDModal");
var pedamodal = document.getElementById("PEDAModal");
var pedbmodal = document.getElementById("PEDBModal");
var pedcmodal = document.getElementById("PEDCModal");
var peddmodal = document.getElementById("PEDDModal");

// PED
var ped = document.getElementById("PED");
var peda = document.getElementById("PEDA");
var pedb = document.getElementById("PEDB");
var pedc = document.getElementById("PEDC");
var pedd = document.getElementById("PEDD");

// PED
ped.onclick = function() {
    pedmodal.style.display = "block";
}
peda.onclick = function() {
      pedamodal.style.display = "block";
}
pedb.onclick = function() {
      pedbmodal.style.display = "block";
}
pedc.onclick = function() {
      pedcmodal.style.display = "block";
}
pedd.onclick = function() {
      peddmodal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == pedmodal) {
      pedmodal.style.display = "none";
    }
    if (event.target == pedamodal) {
      pedamodal.style.display = "none";
    }
    if (event.target == pedbmodal) {
      pedbmodal.style.display = "none";
    }
    if (event.target == pedcmodal) {
      pedcmodal.style.display = "none";
    }
    if (event.target == peddmodal) {
      peddmodal.style.display = "none";
    }
  }