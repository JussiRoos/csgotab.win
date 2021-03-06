function searchF() {
  var x = document.getElementById("myInput").value;
  window.location.href = "https://www.google.com/search?q="+x;
}

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   searchF();
  }
});



function searchFyt() {
  var x = document.getElementById("myInputYt").value;
  window.location.href = "https://www.youtube.com/results?search_query="+x;
}

var input = document.getElementById("myInputYt");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   searchFyt();
  }
});
