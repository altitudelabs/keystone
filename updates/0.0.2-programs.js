/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	Program: [
		{
			'title':'Programs',
			'content':"\u003cp\u003eTake advantage of the summer break to get ahead of the competition by preparing for tests and the upcoming school semester.\u003c/p\u003e\r\n\u003cp\u003eThis summer we will be offering a full program of courses in standardized testing, writing skills, and subject previews. We will be opening courses for students preparing to take the SAT, ACT, or SSAT exams in the coming months, as well as our Cornerstone program, designed as a holistic literature and humanities approach to building critical thinking skills. In addition, we will hold a Writing course for high school students looking to improve their analytical writing skills for various academic pursuits.\u003c/p\u003e\r\n\u003cp\u003eIn August, our Hong Kong office will hold a special three-week session specifically geared towards Previews for upcoming Fall semester courses. As students prepare for the new school year,\u0026nbsp;Previews will give them a head-start.\u003c/p\u003e\r\n\u003cp\u003eIn addition to our standard programs, our Seoul, Korea office will hold 10-day, Daily Intensive programs for students whose travel availabilities are less flexible, as well as for students who want shorter, intensive bursts of preparation.\u003c/p\u003e\r\n\u003cp\u003eFor more information, please see below:\u003c/p\u003e\r\n\u003ch4\u003eHONG KONG\u003c/h4\u003e\r\n\u003ch6\u003eSession 1: June 15 - July 11, 2015\u003c/h6\u003e\r\n\u003ch6\u003eSession 2: July 13 - August 8, 2015\u003c/h6\u003e\r\n\u003ch6\u003ePreviews: August 10 - 29, 2015\u003c/h6\u003e\r\n\u003cp\u003e\u003cspan style=\"text-decoration: underline;\"\u003e\u003ca href=\"https://www.dropbox.com/s/5ajhggql1wqhn3z/course%2Bschedule%2B-%2Bsummer%2B2015%2B-%2Bkeystone%2BHK%2B%281%29%20%281%29.pdf?dl=1\"\u003e Keystone HK Summer 2015 Course Schedule\u003c/a\u003e\u003c/span\u003e\u0026nbsp;\u003c/p\u003e\r\n\u003ch4\u003eSEOUL, KOREA\u003c/h4\u003e\r\n\u003ch6\u003eSession 1: June 8 - June 30, 2015\u003c/h6\u003e\r\n\u003ch6\u003eSession 2: July 1 - July 23, 2015\u003c/h6\u003e\r\n\u003ch6\u003eSession 3: July 27 - August 18, 2015\u003cbr /\u003e\u003cbr /\u003e\u003c/h6\u003e\r\n\u003ch6\u003eDaily Session 1: July 13 - July 24, 2015\u003c/h6\u003e\r\n\u003ch6\u003eDaily Session 2: August 3 - August 14, 2015\u003c/h6\u003e\r\n\u003ch6\u003eDaily Session 3: August 19 - August 29, 2015\u003c/h6\u003e\r\n\u003cp\u003e\u003cspan style=\"text-decoration: underline;\"\u003e\u003ca href=\"https://www.dropbox.com/s/otrky9mo4th6k2e/course%2Bschedule%2B-%2Bsummer%2B2015%2B-%2Bkeystone%2BKR.pdf?dl=1\"\u003e Keystone Seoul Summer 2015 Course Schedule\u003c/a\u003e\u003c/span\u003e\u003c/p\u003e"
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
