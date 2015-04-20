'use strict';
// Include gulp
var gulp = require('gulp'); 
// Include Our Plugins
var sass = require('gulp-sass');
var refresh     = require('gulp-livereload');

// Compile Our Sass
module.exports = function() {
  return gulp.src('public/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles/'))
    .pipe(refresh());
};

