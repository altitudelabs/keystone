'use strict';
App.About.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.about-history').offset().top
    }, 500);
    });
  }
};
