$(document).ready(function() {
  var winHeight = $(window).height()
  var winWidth = $(window).width()
  $('.sections, .section--cover').height(winHeight)
  var controller = new ScrollMagic.Controller()

  // cover
  ;(function() {

    
    var wipeAnimation = new TimelineMax()
                .fromTo(".section--tech-overview", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
                .fromTo(".section--work-experience", 1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
                .fromTo(".section--project-mno", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
                .fromTo(".section--project-pqr", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
    var sceneCover = new ScrollMagic.Scene({
        triggerElement: '.sections',
        triggerHook: "onLeave",
        duration: '400%' // 4个图 100% 表示 屏幕高度
      })
      .setPin('.sections')
      .setTween(wipeAnimation)
      // .addIndicators() for debugger
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
