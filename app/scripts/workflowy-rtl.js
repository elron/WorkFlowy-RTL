'use strict';

document.body.childNodes[document.body.childNodes.length - 3].className = 'rtl-popup';

setTimeout(function () {
  var $rtlTopHeader = document.body.childNodes[document.body.childNodes.length - 1];
  $rtlTopHeader.className = 'rtl-top-header';
  $rtlTopHeader.childNodes[0].children[0].className = $rtlTopHeader.childNodes[0].children[0].className + ' rtl-stars-menu';
  $rtlTopHeader.childNodes[0].children[4].className = $rtlTopHeader.childNodes[0].children[0].className + ' rtl-options-menu';

  // document.getElementsByClassName('gearMenu')[0].childNodes;
  // document.getElementsByClassName('gearMenu')[0].addEventListener('click', function() {
  //   console.log('clicked');
  // });
}, 2000);