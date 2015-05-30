'use strict';
App.Bootcamp.controller = {
  init: function() {

  },

  initSwitchHero: function() {
    var photos = [
      '../heros/bootcamp.jpg',
      '../heros/bootcamp1.jpg',
      '../heros/bootcamp2.jpg',
      '../heros/bootcamp3.jpg',
      '../heros/bootcamp4.jpg'
    ];
    var count = 0;

    $('.bootcamp-main').on('click', function() {
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  },

  initSwitchIllustrations: function() {
    var photos = ['../images/bootcamp-enrichment@2x.png', '../images/enrichment_program@1x.png'

    ];
    var count = 0;

    $('.enrichment .diagram').on('click', function() {
      count++;
      if (count === photos.length) { count = 0; }

      $(this).attr('src', photos[count]);

    });
  }
};
