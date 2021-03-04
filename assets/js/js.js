function searchF() {
  var x = document.getElementById("myInput").value;
  window.location.href = "https://www.google.com/search?q="+x;
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});