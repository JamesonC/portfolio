/*
  Document Load-in Animation
*/
const $load = document.getElementsByClassName('js-load')[0];
if ($load) {
  window.addEventListener('load', function(){
    toggle($load, 'opacity-0', 'opacity-1');
  });
}
/*
  Card Link Interactions
*/
const $links = document.getElementsByClassName('js-link');
if ($links) {
  for (var l = 0; l < $links.length; l++) {
    //  Mouse Enter
    $links[l].addEventListener('mouseenter', function(){
      var $title = this.getElementsByClassName('js-title')[0];
      var $subtitle = this.getElementsByClassName('js-title')[1];
      toggle(this, 'translateY-0', 'translateY--0_5');
      toggle(this, 'shadow-0', 'shadow-1');
      toggle($title, 'opacity-0', 'opacity-1');
      toggle($subtitle, 'opacity-0', 'opacity-1');
    });
    //  Mouse Leave
    $links[l].addEventListener('mouseleave', function(){
      var $title = this.getElementsByClassName('js-title')[0];
      var $subtitle = this.getElementsByClassName('js-title')[1];
      toggle(this, 'translateY-0', 'translateY--0_5');
      toggle(this, 'shadow-0', 'shadow-1');
      toggle($title, 'opacity-0', 'opacity-1');
      toggle($subtitle, 'opacity-0', 'opacity-1');
    });
  }
}
/*
  Case Study Source Links
*/
const $sources = document.getElementsByClassName('js-source');
if ($sources) {
  for (var s = 0; s < $sources.length; s++) {
    //  Mouse Enter
    $sources[s].addEventListener('mouseenter', function(){
      toggle(this, 'translateY-0', 'translateY--0_5');
      toggle(this, 'shadow-0', 'shadow-1');
    });
    //  Mouse Leave
    $sources[s].addEventListener('mouseleave', function(){
      toggle(this, 'translateY-0', 'translateY--0_5');
      toggle(this, 'shadow-0', 'shadow-1');
    });
  }
}
/*
  Navigation Arrow Interaction
*/
const $nav = document.getElementsByClassName('js-nav');
if ($nav) {
  for (var n = 0; n < $nav.length; n++) {
    //  Mouse Enter
    $nav[n].addEventListener('mouseenter', function(){
      toggle(this, 'translateX-0', 'translateX--0_5');
    });
    //  Mouse Leave
    $nav[n].addEventListener('mouseleave', function(){
      toggle(this, 'translateX-0', 'translateX--0_5');
    });
  }
}
/*
  Post Gallery Interactions
*/
const $galleries = document.getElementsByClassName('js-gallery');
// Store gallery indexes if gallery has more than one image
galleryIndexes = [];
for (var i = 0; i < $galleries.length; i++) {
  var totalImages = $galleries[i].getElementsByClassName('js-image').length;
  if (totalImages > 1) {
    galleryIndexes.push(0);
  }
}
// Add click event listeners to galleries
if ($galleries) {
  for (var g = 0; g < $galleries.length; g++) {
    // Click
    $galleries[g].addEventListener('click', function(){
      updateIndex(this);
    });
  }
}
/*
  Toggle Function
*/
function toggle($element, classA, classB) {
  $element.classList.toggle(classA);
  $element.classList.toggle(classB);
}
