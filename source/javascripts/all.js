/*

  Fade-in Elements on Load

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

  Fade-in Elements on Load

*/
const links = document.getElementsByClassName('js-link');
//
for (var l = 0; l < links.length; l++) {
  //
  links[l].addEventListener('mouseenter', function(){
    var $title = this.getElementsByClassName('js-title')[0];
    var $subtitle = this.getElementsByClassName('js-title')[1];
    move(this);
    shadow(this);
    show($title);
    show($subtitle);
  });
  //
  links[l].addEventListener('mouseleave', function(){
    var $title = this.getElementsByClassName('js-title')[0];
    var $subtitle = this.getElementsByClassName('js-title')[1];
    move(this);
    shadow(this);
    show($title);
    show($subtitle);
  });
}
//
function show($element) {
  $element.classList.toggle('opacity-0');
  $element.classList.toggle('opacity-1');
}
//
function move($element) {
  $element.classList.toggle('translateY-0');
  $element.classList.toggle('translateY--0_5');
}
//
function shadow($element) {
  $element.classList.toggle('shadow-0');
  $element.classList.toggle('shadow-1');
}
