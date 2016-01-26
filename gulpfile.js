'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassOptions = {
    // Values: nested, expanded, compact, compressed
    outputStyle: 'nested',
    includePaths: './app/bootstrap-sass-3.3.6/assets/stylesheets'
};
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');


// https://www.npmjs.com/package/gulp-sass
// https://github.com/sass/node-sass

gulp.task('sass', function () {
    gulp.src('./app/stylesheets/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        //.pipe(sourcemaps.write('.'))  // breaks load srcmap of autoprefixer.
        .pipe(gulp.dest('./app/stylesheets'));
});

gulp.task('sass:watch', function () {
    //gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./app/stylesheets/*.scss', ['sass']);
});


// https://github.com/postcss/autoprefixer

gulp.task('autoprefixer', function () {
    return gulp.src('./app/stylesheets/*.css')
        //.pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/stylesheets'));
});
