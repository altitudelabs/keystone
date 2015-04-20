'use strict';
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var clean = require('gulp-clean');

module.exports = function() {
  return gulp.src('./dist', {read: false})
    .pipe(clean());

  // gulp.src('./client/app/**/*.min.css', {read: false})
    // .pipe(clean());
};

