'use strict';
App.Summer.controller = {
  init: function() {

  },

  initSwitchHero: function() {
    var photos = [
     '../heros/summer_course.jpg',
     '../heros/summer_course1.jpg',
     '../heros/summer_course2.jpg',
     '../heros/summer_course3.jpg'
    ];
    var count = 0;

    $('.summer-main').on('click', function() {
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  },
  initScrollDownButton: function() {
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.text-content').offset().top - 70
      }, 500);
    });

    this.initSwitchHero();
  },
};
