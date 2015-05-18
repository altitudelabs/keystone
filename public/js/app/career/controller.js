'use strict';


App.Career.controller = {
  init: function() {

  },

  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.career-openings').offset().top
    }, 500);
    });
  }
}
