'use strict';
App.About.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.about-history').offset().top - 70
      }, 500);
    });
    this.initSwitchHero();
    this.initSwitchIllustrations();
  },

  initSwitchHero: function() {
    console.log('initSwitchHero');
    var photos = ['../images/about-introduction@2x.png', '../heros/about.jpg', '../heros/about2.jpg', '../heros/about3.jpg'];
    var count = 0;

    $('.about-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  },

  initSwitchIllustrations: function() {
    console.log( 'about');
    var photos = ['../images/about-enrichment@2x.png', '../heros/about.jpg'];
    var count = 0;

    $('.enrichment .diagram').on('click', function() {
      count++;
      if (count === photos.length) { count = 0; }

      $(this).attr('src', photos[count]);

    });
  }
};
