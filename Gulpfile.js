'use strict';

var gulp = require('gulp');
var gutil = require( 'gulp-util' );
var watch = require('gulp-watch');
var newer = require('gulp-newer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task( 'sync', function() {
    return gulp.src( 'src/app/**/*.{html,css}' )
        .pipe(newer('dist/app'))
        .pipe(gulp.dest('dist/app'))
        .on('error', gutil.log);
} );

gulp.task( 'styles', function() {
    return gulp.src('src/app/**/*.scss')
    	.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/app'));
} );

gulp.task('watch', function() {
  gulp.watch('src/**/*.{html,css}', ['sync']);
  gulp.watch('src/app/**/*.scss', ['styles']);
});


gulp.task('default',['styles','sync','watch']);