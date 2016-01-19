// Include gulp
var gulp = require('gulp');

// Include other plugins
var minifyHTML = require('gulp-minify-html');

module.exports = function () {
  var opts = {
    spare:false,
    comments: false,
    empty: false

  };
   gulp.src('./src-templates/**/*.hbs')
      .pipe(minifyHTML({quotes: true}))
      .pipe(gulp.dest('./templates'));
};
