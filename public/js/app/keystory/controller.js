'use strict';

App.Keystory.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    console.log('init');
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.keystory-testimonials').offset().top - 70
      }, 1000);
    });
    // this.initSwitchHero();
    // this.initTextSlider();
    this.initTextSlider2();
  },

  initSwitchHero: function() {
    var photos = [
      '../heros/keystory.jpg',
      '../heros/keystory1.jpg',
      '../heros/keystory2.jpg',
      '../heros/keystory3.jpg'
    ];
    var count = 0;

    $('.keystory-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $(this).css('background-image', 'url(' + photos[count] + ')');
    });
  },

  initTextSlider: function() {
    var self = this;

    if (App.isMobile()) {
      return;
    }


    var selector = '.keystory-main-text h3';
    var texts = [
      'More than 3,000 students have entrusted Keystone to help them through their academic journeys en route to their top choice universities',
      '75% of CAPstone students have been accepted to their early decision / action schools',
      '90% of CAPstone students have been accepted to at least one of their top 3 universities of choice',
      '90% of Keystone students have reached or exceeded their target SAT and SAT / AP Subject Test scores',
      '100% of students love Keystone!'
    ];
    var count = 0;

    nextText();
    $(selector).addClass('animated');
    $(selector).text(texts[count]);



    setTimeout(function () {
      $(selector).addClass('fadeOutLeft');
    }, 5000);

    function nextText () {

      setInterval(function() {
        count ++;
        if (count === texts.length) {
          count = 0;
        }



        $(selector).text(texts[count]);
        $(selector).addClass('fadeInRight');
        $(selector).removeClass('fadeOutLeft');

        setTimeout(function() {
          $(selector).addClass('fadeOutLeft');
          $(selector).removeClass('fadeInRight');

        }, 5000);
        //change text

        // fade in right

        // wait 5 sec

        // fade out left


      }, 5500);

    }


  },
  initTextSlider2: function() {
    var self = this;

    if (App.isMobile()) {
      // return;
    }


    var selector = '.quote.tag-line .tag-container';
    var texts = [
      'Over 3,000 satisfied students',
      '75% accepted to 1st choice university',
      '90% accepted to top 3 choice universities',
      '90% reached target test score',
      '100% of students love Keystone!'
    ];

    var count = 0;

    $(selector).addClass('animated');
    $(selector + ' h1').text(texts[count]);
    // nextText();



    // setTimeout(function () {
    //   $(selector).addClass('fadeOutLeft');
    // }, 5000);
    
    nextText();

    function nextText () {

      setInterval(function() {
        count ++;
        if (count === texts.length) {
          count = 0;
        }



        $(selector + ' h1').text(texts[count]);
        $(selector).addClass('fadeInRight');
        $(selector).removeClass('fadeOutLeft');

        setTimeout(function() {
          $(selector).addClass('fadeOutLeft');
          $(selector).removeClass('fadeInRight');

        }, 5000);
        //change text

        // fade in right

        // wait 5 sec

        // fade out left


      }, 5500);

    }
  }
};
