'use strict';

// Include gulp
var gulp = require('gulp'); 

// Include other plugins
var runSequence = require('run-sequence');

module.exports = function () {
  return gulp.task('serve', function(){
    runSequence('nodemon', 'browser-sync', 'reload');
  });
};
