/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState==4) {

  }
}*/

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat:33.600023, lng: -117.671995},
    zoom:8,
    scrollwheel: false
  });
}

