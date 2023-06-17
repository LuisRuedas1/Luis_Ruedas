//Adds different class to NavBar when on mobile based on screen size
window.addEventListener("resize", addClassOnResize);
addClassOnResize();
function addClassOnResize() {
    var screenWidth = window.innerWidth;
    var myDiv = document.getElementById("mainNavbar");

    if (screenWidth < 992) {
      myDiv.classList.add("navBack");
    } else {
      myDiv.classList.remove("navBack");
    }
}

$(document).ready(function() {
  $('#menu-button').on('click', function() {
    $('.mainCenterText').toggleClass('mainCenterTextModified');
  });
});

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var popup = document.getElementById("myPopup");
window.onclick = function(event) {
  if (event.target == popup) {
    popup.classList.remove("show");
}
} 







