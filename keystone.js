// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone'),
	handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'keystone',
	'brand': 'keystone',

	'sass': 'public',
	// 'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./src-templates/views/helpers')(),
		extname: '.hbs'
	}).engine,

	'emails': 'templates/emails',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'Hn_mdJJTV%L"WiR=BX-ud4N550<01e:t`sT4@$lwP%P^}Fwo+U0"OJo_p}#}>2U-',
	'wysiwyg cloudinary images':true,
	'wysiwyg additional buttons': 'fontsizeselect fontselect ',
	'wysiwyg menubar': true,
	'wysiwyg importcss': '../../styles/wysiwyg.css'


});

// Cloudinary
keystone.set('cloudinary config', {
  'cloud_name': process.env.CLOUDINARY_CLOUDNAME || 'dv7vierfl',
  'api_key': process.env.CLOUDINARY_APIKEY || '953732468911817',
  'api_secret': process.env.CLOUDINARY_APISECRET || 'LW6kbFzOvH9zLJK2UcAqS7ia_RQ'
});

// console.log(keystone.app);
keystone.app.use(keystone.express.static('public', { maxAge: 0 }));
// Port
keystone.set('port', 8888);

// Mandrill
keystone.set('mandrill api key', '86xH7_i2NLC5x5sL9hA36w');
keystone.set('mandrill username', 'altitudedrive@gmail.com');
// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	cache: false
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

// Setup replacement rules for emails, to automate the handling of differences
// between development a production.

// Be sure to update this rule to include your site's actual domain, and add
// other rules your email templates require.

keystone.set('email rules', [{
	find: '/images/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/images/' : 'http://localhost:3000/images/'
}, {
	find: '/keystone/',
	replace: (keystone.get('env') == 'production') ? 'http://www.your-server.com/keystone/' : 'http://localhost:3000/keystone/'
}]);

// Load your project's email test routes

keystone.set('email tests', require('./routes/emails'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	//'posts': ['posts', 'post-categories'],
	'users': 'users',
	'services': 'services',
	'programs':'programs',
	'keystories':'keystories'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
