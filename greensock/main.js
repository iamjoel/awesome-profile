$(document).ready(function () {
  var winW = $(window).width()
  var anchors = ['cover', 'basic', 'tech-overview', 'work-experience', 'project-mno', 'project-pqr']
  var effects = {
    cover: function () {
      var $target = $('.section--cover h1')
      TweenMax.fromTo($target[0], 3 /* 持续时间*/ , 
      {
        scale: .2,
        opacity: .1,
        rotation: 0,
      },
      {
        rotation: 360,
        scale: 2,
        opacity: 1,
        ease: Strong.easeOut
      })
    },
    basic: function() {
      var $item = $('.section--basic li')
      var time = 1
      $item.each(function (i) {
        TweenMax.fromTo(this, time, {
          x: '-' + winW + 'px'
        }, {
          x: '50px',
          delay: time * i,
          ease: Strong.easeOut
        })
      })
    }
  }

  $('#main').fullpage({
     sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
     anchors: anchors,
     css3: true,
     scrollingSpeed: 1000,
     afterLoad: function (anchorLink, index) {
       effects[anchorLink] && effects[anchorLink]()
     }
  })

  
})