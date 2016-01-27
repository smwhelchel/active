/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {

  }
}*/

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat:44.450, lng: -78.546},
    zoom:5,
    scrollwheel: false
  });
}

