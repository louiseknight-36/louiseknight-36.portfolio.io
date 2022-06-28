window.onscroll = function() {myFunction()};
const navcontainer = document.getElementById("myNav");
const sticky = navcontainer.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navcontainer.classList.add("sticky");
  } else {
    navcontainer.classList.remove("sticky");
  }
}

