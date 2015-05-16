
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var browserify = require('browserify');
// var reactify = require('reactify');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');



module.exports = function() {
  // return gulp.src('./public/js/app/*.js')
  // .pipe(browserify())
  // .bundle()
  // //Pass desired output filename to vinyl-source-stream
  // .pipe(source('bundle.js'))
  // // Start piping stream to tasks!
  // .pipe(gulp.dest('public/js/app/'));
  // var browserified = transform(function(filename) {
  //   var b = browserify(filename);
  //   return b.bundle();
  // });

  // return gulp.src('./public/js/app/main.js')
  // .pipe(browserified)
  // //Pass desired output filename to vinyl-source-stream
  // .pipe(source('bundle.js'))
  // // Start piping stream to tasks!
  // .pipe(gulp.dest('./public/js/app'));

  return browserify({
    debug: true,
    entries: ['./public/js/app/main.js']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/js/app'));


  // var browserified = transform(function(filename) {
  //   var b = browserify(filename);
  //   return b.bundle();
  // });
  // return gulp.src(['./public/js/app/*.js'])
  //   .pipe(browserified)
  //   .pipe(gulp.dest('./public/js/app/'));

  // var browserified = transform(function(filename) {
  //   var b = browserify(filename);
  //   // pre-bundle actions here
  //   // for eg: transform()
  //   b.transform(reactify)
  //   return b.bundle();
  // });

  // return gulp.src(['./src/*.js'])
  //   .pipe(browserified)
  //   // post-bundle actions here
  //   // for e.g.: uglify() after bundling
  //   .pipe(uglify())
  //   .pipe(gulp.dest('./dist'));

};
