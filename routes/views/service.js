var keystone = require('keystone'),
    Service = keystone.list('Service');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  var category = req.params.category;

  locals.section = 'service';

  locals.meta = {
    'title': 'Service',
    'description':'Services range from academic enrichment to boost GPA, New SAT, ACT, AP Subject test preparation to college and boarding school application consulting.'
  };

  locals.filters = {
    category: category
  };
  locals.grade5 = {};
  locals.grade8 = {};
  locals.grade11 = {};
  console.log(locals.filters.category);

  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'grades-5th-8th-left'
    }).exec(function(err, result) {
      locals.grade5.left = result;
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'grades-5th-8th-right'
    }).exec(function(err, result) {
      locals.grade5.right = result;
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'grades-8th-11th-left'
    }).exec(function(err, result) {
      locals.grade8.left = result;
      //locals.grade8.left.content.mainContent = locals.grade8.left.content.mainContent.replace(/<img([\w\W]+?)>/g, "<div class=diagram><img $1></div>")
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'grades-8th-11th-right'
    }).exec(function(err, result) {
      locals.grade8.right = result;
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'grades-11th-12th-left'
    }).exec(function(err, result) {
      locals.grade11.left = result;
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'grades-11th-12th-right'
    }).exec(function(err, result) {
      locals.grade11.right = result;
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'bottom-section-1'
    }).exec(function(err, result) {
      locals.bottom1 = result;
      next(err);
    });
  });
  view.on('init', function(next) {
    Service.model.findOne({
      'slug':'bottom-section-2'
    }).exec(function(err, result) {
      locals.bottom2 = result;
      next(err);
    });
  });





  // Render the view
  if (!category) {
    view.render('service');
  } else {
    if(category === 'grade5') {
      locals.meta = {
        'title': 'Grade 5 - 8',
        'description':'Keystone Prep\'s Boarding School Application Program is designed to help middle school students create the best US boarding school applications.'
      };
    }else if(category === 'grade8') {
      locals.meta = {
        'title': 'Grade 8 - 11',
        'description':'The curricular enrichment programs provide students with private one-on-one and group tutoring services both online and offline to boost GPA.'
      };
    }else if(category === 'grade11') {
      locals.meta = {
        'title': 'Grade 11 - 12',
        'description':'Expert teachers help students improve scores on the New SAT, ACT, SAT and AP subject tests, TOEFL, SSAT, ISEE, and IB exams.'
      };
    }
    view.render(category);
  }
};
