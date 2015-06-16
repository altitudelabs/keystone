'use strict';
App.Grade5.controller = {
  init: function() {

  },
  initTabs: function() {
    var hash = location.hash;
    if (hash.length > 0) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
      
      var $myTab = $(hash);
      if ($myTab.size() != 0) {
        $('a[href=#' + $myTab.attr('id') + ']').click();
      }
      // window.location.hash = '';
      // var id = location.hash.toString();
      // console.log(id);
      // console.log($(id));

    }

    $('a[role="tab"]').click(function() {
      window.location.hash = ($(this).attr('href')).substr(1);
    });
  }
};
