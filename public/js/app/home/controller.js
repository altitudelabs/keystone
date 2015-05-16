'use strict';

App.Home.controller = {
  components: {},
  init: function() {
    console.log('home init controller running');
  },
  initCarousel: function() {
    if (this.components.carousel) {
      this.components.carousel.destroySlider();
    }
    var sliderNumber = 3;
    // if (App.isMobile()) {
    //   sliderNumber = 2;
    // } else {
    //   sliderNumber = 3;
    // }
    if (window.innerWidth < 900) {
      sliderNumber = 2;
    }
    if (window.innerWidth < 500) {
      return;
    }
    this.components.carousel = $('.js-home-carousel-list').bxSlider({
      slideWidth: '1000',
      minSlides: sliderNumber,
      maxSlides: sliderNumber,
      pager: false,
      randomStart: true,
      infiniteLoop: true,
      touchEnabled: true,
      moveSlides: 1,
      auto: true,
      pause: 5000
    });
  }
};
