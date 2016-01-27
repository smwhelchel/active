/*var data = document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();
  var data = quantity;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/search', true);
  xhr.send(data);
}, false);*/

//var clickSubmit = document.

var activityData;
var cityData;
var stateData;
var submitForm = document.getElementById('search-button');
submitForm.addEventListener('click', function(e) {
  e.preventDefault();
  activityData = document.getElementById('activity').value;
  var newActivity = activityData.replace(/\s+/g, '%20');
  console.log(newActivity);
  cityData = document.getElementById('city').value;
  var newCity = cityData.replace(/\s+/g, '%20');
  console.log(newCity);
  stateData = document.getElementById('state').value;
  var newState = stateData.toUpperCase();
  console.log(newState);
})

var populate = document.getElementById('search-results')
var clickButton = document.getElementById('search-button')
clickButton.addEventListener('click', function() { 
populate.className = 'show';
})
