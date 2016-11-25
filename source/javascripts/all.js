/*

  Fade-in Elements on Load

*/
//
const loadElements = document.getElementsByClassName('is-hidden');
//
window.addEventListener('load', function(){
  for (var i = 0; i < loadElements.length; i++) {
    load(loadElements[i]);
  }
});
//
function load(element) {
  element.classList.toggle('is-hidden');
  element.classList.toggle('is-visible');
}
/*

  Dynamic Margin-top for Content

*/
//
const navHeight = document.getElementsByTagName('nav')[0].offsetHeight;
const $main = document.getElementsByTagName('main')[0];
$main.setAttribute('style', 'margin-top: ' + navHeight + 'px;');
