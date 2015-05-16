'use strict';

// Include gulp
var gulp = require('gulp');

var runSequence = require('run-sequence');

// Watch Files For Changes
module.exports = function() {
  // gulp.watch('client/app/*.js', ['browserify']);
  // refresh.listen();
  gulp.watch('public/styles/**/*.scss', function() {
    runSequence(
      'sass',
      'reload'
    );
  });
  // gulp.watch('client/app/*.css', ['minify-css']);
  // gulp.watch('client/*.html', ['minify-html']);
  gulp.watch('templates/**/*.hbs', ['reload']);
  gulp.watch('public/js/**/*.js', ['reload']);
};



 // jshint = require('gulp-jshint'),
 // jshintReporter = require('jshint-stylish'),
 // watch = require('gulp-watch');

/*
 * Create variables for our project paths so we can change in one place
 */
// var paths = {
//  'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
// };


// // gulp lint
// gulp.task('lint', function(){
//  gulp.src(paths.src)
//    .pipe(jshint())
//    .pipe(jshint.reporter(jshintReporter));

// });

// // gulp watcher for lint
// gulp.task('watch:lint', function () {
//  gulp.src(paths.src)
//    .pipe(watch())
//    .pipe(jshint())
//    .pipe(jshint.reporter(jshintReporter));
// });
