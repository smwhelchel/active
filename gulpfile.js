var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var concat  = require('gulp-concat');
var print   = require('gulp-print');
var uglify = require('gulp-uglify');

var app = 'server.js';

gulp.task('default', function() {
  nodemon({
    script: 'server.js'
  })
  gulp.src('public/js/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dest'));
});