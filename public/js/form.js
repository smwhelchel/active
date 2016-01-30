var newActivity;
console.log(newActivity);
var newCity;
var newState;

var data = document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();

  var populate = document.getElementById('search-results');
  populate.className = 'show';

  //get values from inputs
  var activityData = document.getElementById('activity').value;
  newActivity = activityData.replace(/\s+/g, '%20');
  cityData = document.getElementById('city').value;
  var newCity = cityData.replace(/\s+/g, '%20');
  stateData = document.getElementById('state').value;
  var newState = stateData.toUpperCase();

  var data = {
    activity: newActivity,
    city: newCity,
    state: newState
  }

  data = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/search', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.addEventListener('load', function() {

    var apiResponse = xhr.responseText;

    var newData = JSON.parse(apiResponse);

    var myLatLng = {lat: 33.600023, lng: -117.671995};
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat:33.600023, lng: -117.671995},
      zoom:8,
      scrollwheel: false
    });

    //loop through API results
    for (i=0; i<=newData.results.length; i++) {

      //var getPlaceName = newData.results[i].place.placeName;
      var getAddress = newData.results[i].place.addressLine1Txt;
      var getCity = newData.results[i].place.cityName;
      var getZip = newData.results[i].place.postalCode;
      var getName = newData.results[i].assetName;
      var getDate = newData.results[i].activityStartDate;
      var getRegistration = newData.results[i].registrationUrlAdr;

      var marker = new google.maps.Marker({
        map: map,
        position: {
          lat: Number(newData.results[i].place.latitude),
          lng: Number(newData.results[i].place.longitude)
        },
        title: getName
      });

      //append elements to page
      var apiDiv = document.getElementById('api-results');

      var eventName = document.createElement('h4');
      var number = i+1 + '. ';
      eventName.textContent = number + getName;
      apiDiv.appendChild(eventName);

      var eventDate = document.createElement('h5');
      eventDate.textContent = getDate;
      apiDiv.appendChild(eventDate);

      var addressOfPlace = document.createElement('text');
      addressOfPlace.setAttribute('class', 'placeAddress');
      addressOfPlace.textContent = getAddress;
      apiDiv.appendChild(addressOfPlace);

      var cityOfPlace = document.createElement('text');
      cityOfPlace.setAttribute('class', 'placeAddress');
      cityOfPlace.textContent = getCity;
      apiDiv.appendChild(cityOfPlace);

      var zipOfPlace = document.createElement('text');
      zipOfPlace.setAttribute('class', 'placeAddress');
      zipOfPlace.textContent = getZip;
      apiDiv.appendChild(zipOfPlace);

      var lineBreak = document.createElement('br');
      apiDiv.appendChild(lineBreak);

      var eventUrl = document.createElement('a');
      eventUrl.setAttribute('href', getRegistration);
      eventUrl.textContent = 'Register for this event';
      apiDiv.appendChild(eventUrl);

      var border = document.createElement('h6')
      border.textContent = '';
      border.setAttribute('class', 'border');
      apiDiv.appendChild(border);
    }

  })
}, false);



