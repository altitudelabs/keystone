'use strict';
App.Service.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.service-regular-programs').offset().top
    }, 500);
    });
  }
};
