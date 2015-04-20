
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
// var react = require('gulp-react');
var rename = require('gulp-rename');

module.exports = function () {
  return gulp.src('./client/app/bundle.js')
    // .pipe(react())
    .pipe(uglify())
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/app'));


};
