'use strict';
App.Bootcamp.controller = {
  init: function() {

  },

  initSwitchHero: function() {
    console.log('initSwitchHero');
    var photos = ['../images/bootcamp@2x.png',
      '../heros/bootcamp.jpg',
      '../heros/bootcamp2.jpg',
      '../heros/bootcamp3.jpg',
      '../heros/bootcamp4.jpg'
    ];
    var count = 0;

    $('.bootcamp-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  },

  initSwitchIllustrations: function() {
    var photos = ['../images/bootcamp-enrichment@2x.png', '../images/enrichment_program@1x.png'

    ];
    var count = 0;
    console.log(photos.length);

    $('.enrichment .diagram').on('click', function() {
      count++;
      if (count === photos.length) { count = 0; }

      $(this).attr('src', photos[count]);

    });
  }
};
