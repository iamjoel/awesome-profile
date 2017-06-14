$(document).ready(function () {
  var winHeight = $(window).height()
  $('#main .section').height(winHeight)

  var controller = new ScrollMagic.Controller();
  var sceneCover = new ScrollMagic.Scene({
    triggerElement: '.section--cover',
    duration: winHeight - 100
  })
  .setPin('.section--cover h1')
  .addTo(controller)

})