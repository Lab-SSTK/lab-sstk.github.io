// Get the modal
// PEA
var peamodal = document.getElementById("PEAModal");
var peaamodal = document.getElementById("PEAAModal");
var peabmodal = document.getElementById("PEABModal");
var peacmodal = document.getElementById("PEACModal");
var peadmodal = document.getElementById("PEADModal");
// PED
var pedmodal = document.getElementById("PEDModal");
var pedamodal = document.getElementById("PEDAModal");
var pedbmodal = document.getElementById("PEDBModal");
var pedcmodal = document.getElementById("PEDCModal");
var peddmodal = document.getElementById("PEDDModal");
//PJK
var pjkmodal = document.getElementById("PJKModal");
var pjkamodal = document.getElementById("PJKAModal");
var pjkbmodal = document.getElementById("PJKBModal");
var pjkcmodal = document.getElementById("PJKCModal");
var pjkdmodal = document.getElementById("PJKDModal");

// Get the button that opens the modal
// PEA
var pea = document.getElementById("PEA");
var peaa = document.getElementById("PEAA");
var peab = document.getElementById("PEAB");
var peac = document.getElementById("PEAC");
var pead = document.getElementById("PEAD");
// PED
var ped = document.getElementById("PED");
var peda = document.getElementById("PEDA");
var pedb = document.getElementById("PEDB");
var pedc = document.getElementById("PEDC");
var pedd = document.getElementById("PEDD");
// PJK
var pjk = document.getElementById("PJK");
var pjka = document.getElementById("PJKA");
var pjkb = document.getElementById("PJKB");
var pjkc = document.getElementById("PJKC");
var pjkd = document.getElementById("PJKD");

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
// PJK
pjk.onclick = function() {
    pjkmodal.style.display = "block";
  }
  pjka.onclick = function() {
      pjkamodal.style.display = "block";
  }
  pjkb.onclick = function() {
      pjkbmodal.style.display = "block";
  }
  pjkc.onclick = function() {
      pjkcmodal.style.display = "block";
  }
  pjkd.onclick = function() {
      pjkdmodal.style.display = "block";
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
  if (event.target == pjkmodal) {
    pjkmodal.style.display = "none";
  }
  if (event.target == pjkamodal) {
    pjkamodal.style.display = "none";
  }
  if (event.target == pjkbmodal) {
    pjkbmodal.style.display = "none";
  }
  if (event.target == pjkcmodal) {
    pjkcmodal.style.display = "none";
  }
  if (event.target == pjkdmodal) {
    pjkdmodal.style.display = "none";
  }
}