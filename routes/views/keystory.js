var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'keystory';
  locals.data = {
    posts: []
  };
  view.on('init', function(next) {

		var q = keystone.list('Keystory').model.find();
		q.exec(function(err, result) {
			locals.data.posts = result;
			next(err);
		});
	});
  view.render('keystory2');
};
