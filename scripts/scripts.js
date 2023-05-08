//Adds different class to NavBar when on mobile based on screen size
window.addEventListener("resize", addClassOnResize);
addClassOnResize();
function addClassOnResize() {
    var screenWidth = window.innerWidth;
    var myDiv = document.getElementById("mainNavbar");

    if (screenWidth < 992) {
      myDiv.classList.add("bg-light");
    } else {
      myDiv.classList.remove("bg-light");
    }
}

//required for bootstrap popover to work
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
  })




