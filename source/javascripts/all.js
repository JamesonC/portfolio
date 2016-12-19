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

  Fade-in Elements on Load

*/
const links = document.getElementsByClassName('js-link');
//
for (var l = 0; l < links.length; l++) {
  //
  links[l].addEventListener('mouseenter', function(){
    var $title = this.getElementsByClassName('js-title')[0];
    var $subtitle = this.getElementsByClassName('js-title')[1];
    set($title);
    set($subtitle);
  });
  //
  links[l].addEventListener('mouseleave', function(){
    var $title = this.getElementsByClassName('js-title')[0];
    var $subtitle = this.getElementsByClassName('js-title')[1];
    set($title);
    set($subtitle);
  });
}
//
function set($title) {
  $title.classList.toggle('is-hidden');
  $title.classList.toggle('is-visible');
}
