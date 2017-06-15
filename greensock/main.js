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
    },
    'tech-overview': function () {
      var tl = new TimelineMax({repeat:1, repeatDelay:1, yoyo:true})
      // 对一群对象做操作
      tl.staggerTo('.section--tech-overview li', .2 , {
        className:"+=superShadow",
        top:"-=10px",
        ease:Power1.easeOut
      }, .8, "start"/* 最终状态 */)
    },
    'work-experience': function () {
      var $target = $('.section--work-experience .bg')
      $target.css('transform', 'translateX(-100%)')
      TweenMax.fromTo($target[0], 2, {
        x: '-' + winW + 'px'
      },{
        x: 0,
        ease:Power1.easeIn
      })
    },
    'project-mno': function () {
      
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