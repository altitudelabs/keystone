'use strict';

var gulp = require('gulp'); 
var nodemon     = require('gulp-nodemon');

module.exports = function () {
  return gulp.task('nodemon', function(){
    nodemon({
      script: 'keystone.js',
      env: { 
        NODE_ENV: 'development'
      }
    });
  });
};



