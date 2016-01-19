var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.meta = {
		'title': 'Home Page',
		'description':'Keystone Prep - expert teachers who specialize in standardized test preparation and college admissions consulting with offices in Seoul and Hong Kong.'
	};
	// Render the view
	view.render('index');

};
