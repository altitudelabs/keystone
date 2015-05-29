'use strict';

App.Keystory.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.keystory-testimonials').offset().top - 70
      }, 500);
    });
    this.initSwitchHero();
  },

  initSwitchHero: function() {
    console.log('initSwitchHero');
    var photos = ['../images/keystory-introduction@1x.png'];
    var count = 0;

    $('.service-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
