'use strict';


App.Career.controller = {
  init: function() {

  },

  initScrollDownButton: function() {
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.text-content').offset().top - 70
      }, 1000);
    });
    this.initSwitchHero();
  },

  initSwitchHero: function() {
    var photos = ['../images/career-introduction@2x.png',
      '../heros/career.jpg',
      '../heros/career1.jpg',
      '../heros/career2.jpg',
      '../heros/career3.jpg',
      '../heros/career4.jpg'

    ];
    var count = 0;

    $('.career-main').on('click', function() {
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
