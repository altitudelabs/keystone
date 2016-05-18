/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('routes', middleware.cors);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views


	app.get('/', routes.views.index);
	app.get('/service/:category?', routes.views.service);
	app.get('/keystory', routes.views.keystory);
	app.get('/about', routes.views.about);
	app.get('/career', routes.views.career);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/contact', routes.views.contact);
	app.get('/privacy', routes.views.privacy);

	app.get('/bootcamp', routes.views.bootcamp);
	app.get('/snapshot', routes.views.snapshot);
	app.get('/programs', routes.views.programs);
	app.get('/sitemap', routes.views.sitemap);


	var nodemailer = require('nodemailer');
	var sesTransport = require('nodemailer-ses-transport');
	var transporter = nodemailer.createTransport(sesTransport({
	    accessKeyId: process.env.AWS_ACCESS_KEY,
	    secretAccessKey: process.env.AWS_SECRET_KEY,
			region: 'us-east-1',
	    rateLimit: 1 // do not send more than 5 messages in a second
	}));

	console.log(transporter);

	app.post('/contact', function(req, res) {


		var message = {};
		console.log(req.body);
		message.html = 'Name: ' + req.body['name.full'] + '<br>Email: ' + req.body.email + '<br>Message : ' + req.body.message;
		message.from = 'keystone@keystoneprep.com';
		message.subject = 'New contact from Keystoneprep.com';
		message.to = ['keystone@keystoneprep.com','andrew.won@keystoneprep.com'];

		transporter.sendMail(message, function(error, info) {
			if(error){
				res.sendStatus(400, error);
        return console.log(error);
	    }
	    console.log('Message sent: ' + info);
			res.sendStatus(304);
		});
	});


	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
