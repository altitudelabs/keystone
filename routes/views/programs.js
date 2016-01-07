var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'programs';
  view.on('init', function(next) {

    var q = keystone.list('Program').model.findOne({
      'slug':'programs'
    });
    q.exec(function(err, result) {
      locals.data = result;
      next(err);
    });
  });
  // Render the view
  view.render('programs');

};
