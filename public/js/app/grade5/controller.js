'use strict';
App.Grade5.controller = {
  init: function() {

  },
  initTabs: function() {
    $('#myTab a').click(function (e) {
      // e.preventDefault();
      // $(this).tab('show');
    });
    var hash = location.hash;
    if (hash.length > 0) {
      var $myTab = $(hash);
      if ($myTab.size() != 0) {
        //alert('hi!');
        var $topTab = $myTab.parent().closest('.pane');
        if ($topTab.size() != 0) {
            $('a[href=#' + $topTab.attr('id') + ']').click();
        }
        $('a[href=#' + $myTab.attr('id') + ']').click();
      }
      // window.location.hash = '';
      // var id = location.hash.toString();
      // console.log(id);
      // console.log($(id));

    }
  }
};
