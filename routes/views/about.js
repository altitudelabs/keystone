var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'about';
  locals.meta = {
    'title': 'About',
    'description':'Learn about Keystone Prep\'s philosophy and history of success in improving SAT scores and high admissions rates to top colleges and universities.'
  };
  // Render the view
  view.render('about');

};
