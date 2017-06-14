$(document).ready(function() {
  var winHeight = $(window).height()
  $('#main .section').height(winHeight)
  var controller = new ScrollMagic.Controller()

  // cover
  ;(function() {

    var tween = TweenMax.to('.section--cover h1', 1 /* 持续时间*/ , {
      rotation: 720,
      // rotationY: 180,
      // x: '100%',
      // repeat: 2,
      // scale: .5,
      // ease:Back.easeOut
    })
    // return
    var sceneCover = new ScrollMagic.Scene({
        triggerElement: '.section--cover',
        duration: winHeight - 100
      })
      .setTween(tween)
      .setPin('.section--cover h1')
      .addTo(controller)
  })()

  ;(function() {
    // var tween = TweenMax.to('.section--basic li', 1 , {
    //   x: '-100%',
    // })
    // // return
    // var sceneCover = new ScrollMagic.Scene({
    //     triggerElement: '.section--basic',
    //     duration: winHeight - 100
    //   })
    //   .setTween(tween)
    //   .setPin('.section--basic li')
    //   .addTo(controller)
  })()


})
