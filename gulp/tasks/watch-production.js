'use strict';

// Include gulp
var gulp = require('gulp');

var runSequence = require('run-sequence');

// Watch Files For Changes
module.exports = function() {
  // gulp.watch('client/app/*.js', ['browserify']);
  // refresh.listen();
  gulp.watch('public/styles/**/*.scss', ['sass']);
  gulp.watch('public/styles/main.css', function() {
    runSequence(
      'minify-css',
      'reload'
    );
  });
  // gulp.watch('public/*.html', ['minify-html']);
  // gulp.watch('dist/*', ['reload']);
};
