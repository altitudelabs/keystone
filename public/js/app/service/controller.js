'use strict';
App.Service.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.service-regular-programs').offset().top - 70
      }, 500);
    });

    this.initSwitchHero();
  },

  initSwitchHero: function() {
    var photos = ['../images/service-introduction@2x.png',
     '../heros/service.jpg',
     '../heros/service1.jpg',
     '../heros/service2.jpg',
     '../heros/service3.jpg',
     '../heros/service4.jpg',
     '../heros/service5.jpg'
    ];
    var count = 0;

    $('.service-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
    this.initSwitchTimeline();
  },
  initSwitchTimeline: function() {
    var photos = [
      '../images/timeline_v1@1x.png',
      '../images/timeline_v2@1x.png',
      '../images/timeline_v3@1x.png',
      '../images/timeline_v4@1x.png',
      '../images/timeline_v5@1x.png'
    ];
    var count = 0;

    $('.diagram').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).attr('src', photos[count]);
    });
  }



};
