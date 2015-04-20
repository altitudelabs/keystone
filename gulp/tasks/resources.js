
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
// var react = require('gulp-react');
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');

module.exports = function () {
  return gulp.src('./client/favicon.ico')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./public'));

  // gulp.src('./client/bower_components/**/*.*')
  //   .pipe(gulp.dest('./public/bower_components'));
};
