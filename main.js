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

function addAnimation() {

  document.getElementById("blob").classList.add("animateBlob");
}


function removeAnimation() {

  document.getElementById("blob").classList.remove("animateBlob");
}


// Stop page refreshing on form submit

let form = document.getElementById("contactform");

function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// Displays message on form submit

let firstName = document.getElementById("fname").value;

function formCompleted() {
  if (document.getElementById("fname").value == "") {
  alert("Hello! Please complete the form before sending");
}
else { 
  return prompt();
}
}

function prompt() {

  let popupWelcome = document.getElementById("welcome-container");

  let firstName = document.getElementById("fname").value;


  let email = document.getElementById("email").value;

  let message = document.getElementById("message-text").value;

  popupWelcome.classList.add("open-welcome")

  document.getElementById("outputFirstName").innerHTML = firstName
  document.getElementById("outputEmail").innerHTML = email
  document.getElementById("outputMessage").innerHTML = message

}



// Close Welcome Popup

let closePopupWelcome = document.getElementById("welcome-container");


function closeWelcomeContainer() {
    closePopupWelcome.classList.remove("open-welcome");
    document.getElementById("contactform").reset();
}


