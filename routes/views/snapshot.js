var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'snapshot';
  locals.meta = {
    'title': 'Snapshot',
    'description':'Keystone Prep\'s Snapshot Consulting program is a one-time advisory service that helps students plan for college admissions and standardized test.'
  };
  view.on('init', function(next) {

    var q = keystone.list('Service').model.findOne({
      'slug':'bottom-section-2'
    });
    q.exec(function(err, result) {
      locals.data = result;
      next(err);
    });
  });
  // Render the view
  view.render('snapshot');

};
