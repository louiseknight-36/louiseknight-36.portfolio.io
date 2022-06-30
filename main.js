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



const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  
  XHR.addEventListener( 'load', function(event) {
    alert( `Thanks for contacting me.  I'll be in touch soon!` );
  } );

  
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong. Please try again.' );
  } );

  XHR.open( 'POST', 'https://example.com/cors.php' );  
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )

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