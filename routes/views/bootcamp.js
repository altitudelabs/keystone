var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'bootcamp';
  locals.meta = {
    'title': 'Bootcamp',
    'description':'Keystone Prep\'s standardized test bootcamps in Seoul, Hong Kong, and New York help students quickly boost their New SAT, ACT, and AP scores.'
  };
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
