function showPopup(text) {
  document.getElementById("popup-text1").innerText = text;
  document.getElementById("popup1").style.display = "block";
}

function hidePopup(id) {
  document.getElementById(id).style.display = "none";
}
