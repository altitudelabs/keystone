'use strict';
App.Snapshot.controller = {
  init: function() {

  },
  // initScrollDownButton: function() {
  //   $('.scroll-down-button').on('click', function() {
  //     $('html, body').animate({
  //       scrollTop: $('.service-regular-programs').offset().top - 70
  //     }, 500);
  //   });

  //   this.initSwitchHero();
  // },

  initSwitchHero: function() {
    console.log('initSwitchHero');
    var photos = ['../images/snapshot@2x.png', '../heros/snapshot.jpg', '../heros/snapshot2.jpg'];
    var count = 0;

    $('.snapshot-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
