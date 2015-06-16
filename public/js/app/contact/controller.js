'use strict';

'use strict';
App.Contact.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.contact-offices').offset().top - 70
      }, 500);
    });
  },
  initForm: function() {
    $('.contact-form form').on('submit', function(e) {
      e.preventDefault();
      var data = {};
      $.each($('.contact-form form').serializeArray(), function(i, field) {
        data[field.name] = field.value;
      });

      // var email = $(this).find()
      $.ajax({
        type: 'POST',
        url: '/contact',
        data: data,
        success: function(a, b) {
          $('.contact-form form')[0].reset();
          App.Helpers.showAlert('success');
        },
        error: function(err) {
          console.log(err);
        }
      });

    });
  }
};
