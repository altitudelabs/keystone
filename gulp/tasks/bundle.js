'use strict';

// Include gulp
var gulp = require('gulp');

// Include other plugins
var bundle = require('gulp-bundle-assets');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function () {

  return gulp.src('./public/js/bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./public/js'))
    .pipe(rename({
      basename: "bundle",
      extname: ".js"
    }))
    .pipe(gulp.dest('./public/js'));

};
