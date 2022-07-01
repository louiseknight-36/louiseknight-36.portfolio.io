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

// document.querySelectorAll('#contactForm input')
// Array.from (document.querySelectorAll('#contactForm input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {});

// https://www.youtube.com/watch?v=xJAxjstgITk&list=PLpc_YvcwbxaRSFpQQSNBBN3WxhFV7OaI_&index=20


//don't think this works - whats XHR? lol//


//to make onmouseover animation for the blob spin//


// Collison button faffing 

// $(function() {  
//   $('.btn-6')
//     .on('mouseenter', function(e) {
//       var parentOffset = $(this).offset(),
//           relX = e.pageX - parentOffset.left,
//           relY = e.pageY - parentOffset.top;
//       $(this).find('span').css({top:relY, left:relX})
//     })
//     .on('mouseout', function(e) {
//       var parentOffset = $(this).offset(),
//           relX = e.pageX - parentOffset.left,
//           relY = e.pageY - parentOffset.top;
//       $(this).find('span').css({top:relY, left:relX})
//     });
//   $('[href=#]').click(function(){return false});
// });

let popup = document.getElementById("popup")

function openPopup() {
  popup.classList.add("open-popup")
}
function closePopup() {
  popup.classList.remove("open-popup")
}