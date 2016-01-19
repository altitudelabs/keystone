var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'keystory';
  locals.meta = {
    'title': 'Keystory',
    'description':'Student testimonials describe why we are the most respected, successful, and sought after test prep and education consulting company in the world.'
  };
  locals.data = {
    posts: []
  };
  view.on('init', function(next) {

		var q = keystone.list('Keystory').model.find().sort('sortOrder');
		q.exec(function(err, result) {
			locals.data.posts = result;
			next(err);
		});
	});
  view.render('keystory2');
};
