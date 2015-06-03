var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('_uncompressed/sass/*.scss')
    .pipe(compass({
      css: 'css/',
      sass: '_uncompressed/sass'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/'));
});

gulp.task('scripts', function() {
  return gulp.src('_uncompressed/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('_uncompressed/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(notify({ message: 'Scripts uglified' }));
});

gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('_uncompressed/sass/**/*.scss', ['compass']);

  // Watch .js files
  gulp.watch('_uncompressed/js/**/*.js', ['scripts']);

});

gulp.task('default', function() {
    gulp.start('compass', 'scripts');
});
