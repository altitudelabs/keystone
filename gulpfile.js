'use stirct';

// var gulp = require('gulp'),
// 	jshint = require('gulp-jshint'),
// 	jshintReporter = require('jshint-stylish'),
// 	watch = require('gulp-watch');
var runSequence = require('run-sequence');

var gulp = require('./gulp/index.js')([
  'clean',
  'sass',
  'watch',
  'nodemon',
  'reload',
  'browser-sync',
  'serve',
  // 'browserify',
  // 'uglify',
  'minify-css',
	'watch-production'

  // 'minify-html',
  // 'resources'
]);

// // Default Task
gulp.task('default', function() {
	runSequence(
		'serve',
		'watch'
	);
});

gulp.task('production', function() {
	runSequence(
		'serve',
		'watch-production'
	);
});
// gulp.task('default', function (cb) {
//   runSequence(
//     'clean',
//     ['sass', 'browserify'],
//     ['uglify', 'minify-html', 'minify-css'],
//     'watch',
//     cb
//   );
// });

// gulp.task('dev', ['watch', 'connect']);





// /*
//  * Create variables for our project paths so we can change in one place
//  */
// var paths = {
// 	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
// };


// // gulp lint
// gulp.task('lint', function(){
// 	gulp.src(paths.src)
// 		.pipe(jshint())
// 		.pipe(jshint.reporter(jshintReporter));

// });

// // gulp watcher for lint
// gulp.task('watch:lint', function () {
// 	gulp.src(paths.src)
// 		.pipe(watch())
// 		.pipe(jshint())
// 		.pipe(jshint.reporter(jshintReporter));
// });
