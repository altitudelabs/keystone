'use strict';
App.Service.controller = {
  init: function() {

  },
  initScrollDownButton: function() {
    $('.scroll-down-button').on('click', function() {
      $('html, body').animate({
        scrollTop: $('.running-man').offset().top - 70
      }, 500);
    });

    this.initSwitchHero();
  },

  initSwitchHero: function() {
    var photos = ['../images/service-introduction@2x.png',
     '../heros/service.jpg',
     '../heros/service1.jpg',
     '../heros/service2.jpg',
     '../heros/service3.jpg',
     '../heros/service4.jpg',
     '../heros/service5.jpg'
    ];
    var count = 0;

    $('.service-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      // $(this).css('background-image', 'url(' + photos[count] + ')');
    });
    this.initSwitchTimeline();
  },
  initSwitchTimeline: function() {
    // $('.service-main').parallax({imageSrc: '../images/service-introduction@2x.png'});
    // var photos = [
    //   '../images/timeline_v1@1x.png',
    //   '../images/timeline_v2@1x.png'
    // ];
    // var count = 0;

    // $('.diagram').on('click', function() {
    //   console.log(count);
    //   count++;
    //   if (count === photos.length) { count = 0; }

    //   if (count === 1) {
    //     $(this).css('padding-left', '5%');
    //     $(this).css('padding-right', '5%');
    //   } else {
    //     $(this).css('padding-left', '0%');
    //     $(this).css('padding-right', '0%');
    //   }
    //   $(this).attr('src', photos[count]);
    // });
    this.initRunningMan();
  },

  initRunningMan: function() {
    console.log('hh');
    $('.running-man').attr('src', '../images/runningdude1.png');


    $(document).on('scroll', function(e) {
      runningMan(e);
    });
    $(document).on('touchmove', function(e) {
      runningMan(e);
    });

    var documentPosition;
    var manPosition;
    var relativePosition;
    var fullHeight = window.innerHeight - 70; 
    var ratio;
    var totalPhoto = 12;
    var photoNumber;
    var url;

    function runningMan(e) {
      fullHeight = window.innerHeight - 70 - parseFloat($('.running-man').css('height'));
      
      documentPosition = $(document).scrollTop() + 70;
      manPosition = $('.running-man').offset().top;
      
      relativePosition = manPosition - documentPosition;

      ratio = (-relativePosition/fullHeight) + 1;
      if (ratio < 0 || ratio >1) {
        return;
      }

      e.preventDefault();
      photoNumber = Math.floor(ratio * totalPhoto);

      if (photoNumber > totalPhoto || photoNumber < 1) { return; }
      url = '../images/runningdude' + photoNumber + '.png';
      $('.running-man').attr('src', url);

    }
  }



};
