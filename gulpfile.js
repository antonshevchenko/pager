var gulp = require('gulp'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename');
  // es = require('event-stream');

var paths = {
  sass: [
    './scss/**/*.scss'
  ],
};

gulp.task('default', ['css']);

gulp.task('css', function() {
  return gulp.src(paths.sass)
      .pipe(sass({ style: 'compressed' }).on('error', gutil.log))
      .pipe(gulp.dest('./public/css/'))
      .pipe(minifyCss({ keepSpecialComments: 0 }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./public/css/'))
      .on('error', gutil.log);
});

gulp.task('watch', ['default'], function() {
  gulp.watch(paths.sass, ['css']);
});
