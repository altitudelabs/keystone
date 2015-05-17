var keystone = require('keystone');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  var category = req.params.category;

  locals.section = 'service';
  locals.filters = {
    category: category
  };
  console.log(locals.filters.category);
  // Render the view
  if (!category) {
    view.render('service');
  } else {
    view.render(category);
  }
};
