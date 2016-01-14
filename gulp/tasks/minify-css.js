'use strict';

// Include gulp
var gulp = require('gulp');

// Include other plugins
var minifyCss = require('gulp-minify-css');
// var rename = require('gulp-rename');

module.exports = function () {

  return gulp.src('./public/styles/main.css')
    .pipe(minifyCss())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/styles/'));

};
