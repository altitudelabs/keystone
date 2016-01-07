/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Admin', 'name.last': 'User', email: 'eugene@altitudelabs.com', password: 'eugene', isAdmin: true }
	],
	Service: [
		{
			'title':'Cornerstone',
			'typeService':'Academic Prep',
			'content.brief':'Cornerstone is an interdisciplinary program of literature and humanities intended for young students',
			'content.mainContent':'Cornerstone is an interdisciplinary program of literature and humanities intended for students in grades 6 – 9. The program not only builds a solid academic foundation for improvement in the here and now but also expands the potential of its students to perform at an even higher level in the future. Cornerstone has been tailor-made to help students maintain their GPA along with holistically developing skills that will translate into higher standardized test scores. The program consists of 3 levels: 100, 200, 300. Each level builds in students a unique skill set necessary to achieving excellence at every level of schooling. Cornerstone’s aim has and always will be to transform its students into conscious, passionate and capable individuals who can succeed in the classroom and more importantly in life.'
		}
	]

};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});

}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};

*/
