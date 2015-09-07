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
	app.get('/keystory2', routes.views.keystory2);
	app.get('/about', routes.views.about);
	app.get('/career', routes.views.career);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/contact', routes.views.contact);
	app.get('/privacy', routes.views.privacy);
	
	app.get('/bootcamp', routes.views.bootcamp);
	app.get('/snapshot', routes.views.snapshot);
	app.get('/programs', routes.views.programs);


	var mandrill = require('mandrill-api/mandrill');
	var mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_KEY || 'not defined!');
	console.log(mandrill_client);
	app.post('/contact', function(req, res) {


		var message = {};
		console.log(req.body);
		message.text = req.body.message;
		message.from_email = req.body.email;
		message.subject = 'New contact from Keystoneprep.com';
		message.to = [{ 
			email: 'andrew.won@keystoneprep.com',
			name: req.body['name.full'],
			type: 'to'
		},
	 	{
			email: 'keystone@keystoneprep.com',
			name: req.body['name.full'],
			type: 'to'
		}];

		mandrill_client.messages.send({
			message: message,
			async: false,
			ip_pool: 'Main Pool'

		}, function(result) {
			console.log('result', result);
			if (result[0].status === 'sent') {
				console.log('success!!!!');
				res.sendStatus(304);
			} 

		}, function (e) {
			console.log('mandril error', e.name, ' - ', e.message);
			res.sendStatus(400, e);
		});
	});

	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	
};
