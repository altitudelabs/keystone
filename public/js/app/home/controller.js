'use strict';

App.Home.controller = {
  components: {},
  init: function() {
  },
  initCarousel: function() {
    var self = this;
    if (self.components.carousel) {
      self.components.carousel.destroySlider();
    }
    var sliderNumber = 4;
    // if (App.isMobile()) {
    //   sliderNumber = 2;
    // } else {
    //   sliderNumber = 3;
    // }
    if (window.innerWidth < 1300) {
      sliderNumber = 3;
    }
    if (window.innerWidth < 900) {
      sliderNumber = 2;
    }
    if (window.innerWidth < 500) {
      return;
    }
    self.components.carousel = $('.js-home-carousel-list').bxSlider({
      slideWidth: '1000',
      minSlides: sliderNumber,
      maxSlides: sliderNumber,
      pager: false,
      // randomStart: true,
      infiniteLoop: true,
      touchEnabled: true,
      moveSlides: 1
      // auto: true,
      // pause: 5000
    });


    $('.control-right').on('click', function() {
      self.components.carousel.goToNextSlide();
    });
    $('.control-left').on('click', function() {
      self.components.carousel.goToPrevSlide();
    });

  },

  initSwitchHero: function() {
    var photos = ['../images/home-hero@1x.png', '../heros/home.jpg', '../heros/home2.jpg'];
    var count = 0;

    $('.home-main').on('click', function() {
      console.log(count);
      count++;
      if (count === photos.length) { count = 0; }
      $('.home-main').css('background-image', 'url(' + photos[count] + ')');
    });
  }
};
