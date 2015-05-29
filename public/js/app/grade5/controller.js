'use strict';
App.Grade5.controller = {
  init: function() {

  },
  initTabs: function() {
    console.log('init');
    $('#myTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  }
};
