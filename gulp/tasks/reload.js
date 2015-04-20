'use strict';
// Include gulp
var gulp = require('gulp'); 
// server.listen(35729, function(err){
//   if(err) {return console.error(err);}
// });

var browserSync = require('browser-sync');
// browserSync.init({
//   server: {
//     baseDir: './public'
//   }
// });

module.exports = function() {
  gulp.task('reload', function() {
    browserSync.reload();
  });
};

    
