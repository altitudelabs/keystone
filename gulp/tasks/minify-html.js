// Include gulp
var gulp = require('gulp'); 

// Include other plugins
var minifyHTML = require('gulp-minify-html');

module.exports = function () {
  var opts = {spare:true};
    gulp.src('./client/*.html')
      .pipe(minifyHTML(opts))
      .pipe(gulp.dest('./dist'));
};
