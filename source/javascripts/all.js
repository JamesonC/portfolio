const loadElements = document.getElementsByClassName('is-hidden');
window.addEventListener('load', function(){
  for (var i = 0; i < loadElements.length; i++) {
    load(loadElements[i]);
  }
});

function load(element) {
  element.classList.toggle('is-hidden');
  element.classList.toggle('is-visible');
}
