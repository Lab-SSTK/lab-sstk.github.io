//PJK
var pjkmodal = document.getElementById("PJKModal");
var pjkamodal = document.getElementById("PJKAModal");
var pjkbmodal = document.getElementById("PJKBModal");
var pjkcmodal = document.getElementById("PJKCModal");
var pjkdmodal = document.getElementById("PJKDModal");

// PJK
var pjk = document.getElementById("PJK");
var pjka = document.getElementById("PJKA");
var pjkb = document.getElementById("PJKB");
var pjkc = document.getElementById("PJKC");
var pjkd = document.getElementById("PJKD");

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

  window.onclick = function(event) {
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