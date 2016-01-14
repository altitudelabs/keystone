// Include gulp
var gulp = require('gulp');

// Include other plugins
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
module.exports = function () {
  return gulp.src('./public/src-images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant(), jpegtran(), gifsicle()]
		}))
		.pipe(gulp.dest('./public/images'));
};
