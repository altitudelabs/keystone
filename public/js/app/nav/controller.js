'use strict';

App.Nav.controller = {
  init: function() {

  },
  initMobileNav: function() {
    var listHeight = $('.mob-nav-buttons-container ul').height();
    console.log(listHeight);
    $('.mob-nav-toggle-button').on('click', function() {
      $(this).toggleClass('active');

      var activeState = $(this).hasClass('active');
      console.log(activeState);
      if (activeState) {
        $('.mob-nav-buttons-container').height(listHeight);
      } else {
        $('.mob-nav-buttons-container').height(0);
      }
    });
  }
};
