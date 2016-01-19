var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'career';
  locals.meta = {
    'title': 'Career',
    'description':'Join Keystone Prep\'s global team of instructors and education consultants to help students from around the world reach their academic potential.'
  };
  // Render the view
  view.render('career');

};
