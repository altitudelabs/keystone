'use strict';

// Include gulp
var gulp = require('gulp'); 

// Include other plugins
var browserSync = require('browser-sync');

module.exports = function () {
  return gulp.task('browser-sync', function(){
    browserSync({
      proxy: 'localhost:3000',  // local node app address
      port: 5000,  // use *different* port than above
      notify: true
    });
  });
};
