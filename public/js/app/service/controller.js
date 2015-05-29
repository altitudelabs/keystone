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
    console.log('initSwitchHero');
    var photos = ['../images/service-introduction@2x.png', '../heros/service.jpg', '../heros/service2.jpg'];
    var count = 0;

    $('.service-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
