'use strict';


App.Career.controller = {
  init: function() {

  },

  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.text-content').offset().top - 70
      }, 500);
    });
    this.initSwitchHero();
  },

  initSwitchHero: function() {
    console.log('initSwitchHero');
    var photos = ['../images/career-introduction@2x.png', '../heros/career.jpg'];
    var count = 0;

    $('.career-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
