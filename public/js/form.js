var newActivity;
var newCity;
var newState;

var data = document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();
  openResults();
  var activityData = document.getElementById('activity').value;
  newActivity = activityData.replace(/\s+/g, '%20');
  console.log(newActivity);
  cityData = document.getElementById('city').value;
  var newCity = cityData.replace(/\s+/g, '%20');
  console.log(newCity);
  stateData = document.getElementById('state').value;
  var newState = stateData.toUpperCase();
  console.log(newState);
  var data = {
    activity: newActivity,
    city: newCity,
    state: newState
  }
  data = JSON.stringify(data);
  console.log(newActivity);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/search', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.addEventListener('load', function() {
    console.log(xhr.responseText);
    for (i=0; i<=data.length; i++) {
      var nameData = data.results[2].place.placeName.value;
      console.log(nameData);
    }
  })
}, false);

function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat:33.600023, lng: -117.671995},
    zoom:8,
    scrollwheel: false
  });
}

function openResults () {
  var populate = document.getElementById('search-results');
  populate.className = 'show';
  google.maps.event.trigger(map, initMap());
}
