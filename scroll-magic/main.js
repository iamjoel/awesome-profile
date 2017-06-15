$(document).ready(function() {
  var winHeight = $(window).height()
  var winWidth = $(window).width()
  $('#main .section').height(winHeight)
  var controller = new ScrollMagic.Controller()

  // cover
  ;(function() {

    var tween = TweenMax.to('.section--cover', 1 /* 持续时间*/ , {
      x: '-100%'
      // rotationY: 180,
      // x: '100%',
      // repeat: 2,
      // scale: .5,
      // ease:Back.easeOut
    })
    var sceneCover = new ScrollMagic.Scene({
        triggerElement: '#main',
        // offset: 10,
        duration: winHeight
      })
      .setTween(tween)
      // .setPin('.section--cover h1')
      .addTo(controller)
      .addIndicators()
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
