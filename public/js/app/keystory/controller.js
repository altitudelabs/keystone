'use strict';

App.Keystory.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.keystory-testimonials').offset().top
      }, 500);
    });
  }
};
