var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // Set locals
  locals.section = 'blog';
  locals.filters = {
    job: req.params.job
  };
  locals.data = {
    jobs: []
  };

  // Load the current job
  view.on('init', function(next) {

    var q = keystone.list('job').model.findOne({
      state: 'published',
      slug: locals.filters.job
    }).populate('author categories');

    q.exec(function(err, result) {
      locals.data.job = result;
      next(err);
    });

  });

  // Load other jobs
  view.on('init', function(next) {

    var q = keystone.list('job').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

    q.exec(function(err, results) {
      locals.data.jobs = results;
      next(err);
    });

  });

  // Render the view
  view.render('job');

};
