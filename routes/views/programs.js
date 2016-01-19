var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'programs';
  locals.meta = {
    'title': 'Programs',
    'description':'Intensive test prep sessions are held in Hong Kong and Seoul during the winter, spring, and summer breaks for New SAT, ACT, AP and Subject tests.'
  };
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
