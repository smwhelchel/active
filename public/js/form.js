var data = document.getElementById('search-button').addEventListener('click', function(e) {
  e.preventDefault();
  var data = quantity;
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/search', true);
  xhr.send(data);
}, false);