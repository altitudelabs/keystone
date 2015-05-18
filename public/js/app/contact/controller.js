'use strict';

'use strict';
App.Contact.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.contact-offices').offset().top
    }, 500);
    });
  }
};
