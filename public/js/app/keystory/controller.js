'use strict';

App.Keystory.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.keystory-testimonials').offset().top - 70
      }, 1000);
    });
    this.initSwitchHero();
  },

  initSwitchHero: function() {
    var photos = [
      '../heros/keystory.jpg',
      '../heros/keystory1.jpg',
      '../heros/keystory2.jpg',
      '../heros/keystory3.jpg'
    ];
    var count = 0;

    $('.keystory-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
