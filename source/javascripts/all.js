/*

  Document Load-in Animation

*/
//
const loadElements = document.getElementsByClassName('js-load');
//
window.addEventListener('load', function(){
  for (var i = 0; i < loadElements.length; i++) {
    show(loadElements[i]);
  }
});
/*

  Card Link Interactions

*/
const links = document.getElementsByClassName('js-link');
//
for (var l = 0; l < links.length; l++) {
  //
  links[l].addEventListener('mouseenter', function(){
    var $title = this.getElementsByClassName('js-title')[0];
    var $subtitle = this.getElementsByClassName('js-title')[1];
    translateY(this);
    shadow(this);
    show($title);
    show($subtitle);
  });
  //
  links[l].addEventListener('mouseleave', function(){
    var $title = this.getElementsByClassName('js-title')[0];
    var $subtitle = this.getElementsByClassName('js-title')[1];
    translateY(this);
    shadow(this);
    show($title);
    show($subtitle);
  });
}
/*

  Case Study Source Links

*/
const sources = document.getElementsByClassName('js-source');
//
for (var s = 0; s < sources.length; s++) {
  //
  sources[s].addEventListener('mouseenter', function(){
    translateY(this);
    shadow(this);
  });
  //
  sources[s].addEventListener('mouseleave', function(){
    translateY(this);
    shadow(this);
  });
}
/*

  Navigation Arrow Interaction

*/
const nav = document.getElementsByClassName('js-nav')[0];
//
nav.addEventListener('mouseenter', function(){
  var $arrow = this.getElementsByClassName('js-arrow')[0];
  translateX($arrow);
});
//
nav.addEventListener('mouseleave', function(){
  var $arrow = this.getElementsByClassName('js-arrow')[0];
  translateX($arrow);
});
//
function show($element) {
  $element.classList.toggle('opacity-0');
  $element.classList.toggle('opacity-1');
}
//
function translateY($element) {
  $element.classList.toggle('translateY-0');
  $element.classList.toggle('translateY--0_5');
}
//
function shadow($element) {
  $element.classList.toggle('shadow-0');
  $element.classList.toggle('shadow-1');
}
//
function translateX($element) {
  $element.classList.toggle('translateX-0');
  $element.classList.toggle('translateX--0_5');
}
