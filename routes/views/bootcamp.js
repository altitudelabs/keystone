var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'bootcamp';
  view.on('init', function(next) {

    var q = keystone.list('Service').model.findOne({
      'slug':'bottom-section-1'
    });
    q.exec(function(err, result) {
      locals.data = result;
      next(err);
    });
  });
  // Render the view
  view.render('bootcamp');

};
