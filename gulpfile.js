var gulp    = require('gulp');
var mocha   = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var concat  = require('gulp-concat');
var print   = require('gulp-print');
var uglify = require('gulp-uglify');

var app = 'server.js';

gulp.task('default', function() {
  gulp.src('public/*.js')
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

// gulp.watch(['public/**/.js', 'public/*.html'], ['build']);

// gulp.task('views', function() {
//   return gulp.src('public/**/*.html')
//     .pipe(gulp.dest('server/public'));
// })

// gulp.task('concat', function() {
//   return gulp.src(libraries) 
//     .pipe(concat('vendor.js'))
//     .pipe(gulp.dest('server/public'))
// })

// gulp.task('build', ['views', 'concat'], function() {
//   return gulp.src(['public/index.html'])
//     .pipe(gulp.dest('server/public'));
// })

// gulp.task('test', ['build'], function() {
//   return gulp.src('server/**/*.spec.js')
//     .pipe(mocha());
// })