console.log('%c HI', 'color: firebrick');

window.addEventListener("DOMContentLoaded", function(event) {
  window.fetch("https://dog.ceo/api/breeds/image/random/4").then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
  });
});
