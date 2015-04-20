
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var browserify = require('browserify');
// var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');


module.exports = function() {
  return browserify('./client/app/app.js')
  .bundle()
  //Pass desired output filename to vinyl-source-stream
  .pipe(source('bundle.js'))
  // Start piping stream to tasks!
  .pipe(gulp.dest('./client/app'))

};
