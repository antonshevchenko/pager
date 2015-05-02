var gulp = require('gulp'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  minifyCss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  ngAnnotate = require('gulp-ng-annotate'),
  es = require('event-stream');

var paths = {
  sass: [
    './assets/scss/**/*.scss'
  ],
  css: [

  ],
  js: [
    './bower_components/angular/angular.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './assets/js/**/*.js',
  ],
  img: [
    './assets/img/**/*'
  ],
  fonts: [
    // './bower_components/bootstrap-sass-official/assets/fonts/**/*',
    // './public/fonts/**/*'
  ],
  copy: {
    js: [
        // './bower_components/tinymce/**',
        // './bower_components/angular-cookies/angular-cookies.min.js.map'
    ],
    css: [],
    html: [
      './assets/views/**/*.html',
    ]
  },
};

gulp.task('default', ['css', 'js', 'img', 'fonts', 'copy-js', 'copy-css', 'copy-html']);

gulp.task('css', function() {
  var vendorFiles = gulp.src(paths.css);
  var appFiles = gulp.src(paths.sass)
      .pipe(sass({ style: 'compressed' }).on('error', gutil.log));

  return es.concat(vendorFiles, appFiles)
      .pipe(concat('app.css'))
      .pipe(gulp.dest('./public/css/'))
      .pipe(minifyCss({ keepSpecialComments: 0 }))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./public/css/'))
      .on('error', gutil.log);
});

gulp.task('js', ['clean-js'], function() {
  return gulp.src(paths.js)
      .pipe(concat('app.min.js'))
      // .pipe(ngAnnotate())
      .pipe(gulp.dest('./public/js'))
      .on('error', gutil.log);
});

gulp.task('img', ['clean-img'], function() {
  return gulp.src(paths.img)
      .pipe(gulp.dest('./public/img'))
      .on('error', gutil.log);
});

gulp.task('fonts', ['clean-fonts'], function() {
  return gulp.src(paths.fonts)
      .pipe(gulp.dest('./public/fonts'))
      .on('error', gutil.log);
});

gulp.task('copy-js', ['clean-js'], function(){
  return gulp.src(paths.copy.js && paths.copy.js.length ? paths.copy.js : '')
      .pipe(gulp.dest('./public/js'))
      .on('error', gutil.log);
});

gulp.task('copy-css', ['clean-css'], function(){
  return gulp.src(paths.copy.css && paths.copy.css.length ? paths.copy.css : '')
      .pipe(gulp.dest('./public/css'))
      .on('error', gutil.log);
});

gulp.task('copy-html', function(){
  return gulp.src(paths.copy.html && paths.copy.html.length ? paths.copy.html : '')
      .pipe(gulp.dest('./public/views'))
      .on('error', gutil.log);
});

gulp.task('clean-img', function() {
  return gulp.src('./public/img', { read: false })
      .pipe(clean());
});

gulp.task('clean-fonts', function() {
  return gulp.src('./public/fonts', { read: false })
      .pipe(clean());
});

gulp.task('clean-js', function() {
  return gulp.src('./public/js', { read: false })
      .pipe(clean());
});

gulp.task('clean-css', function() {
  return gulp.src('./public/css', { read: false })
      .pipe(clean());
});

gulp.task('clean', function() {
  return gulp.src('./public/', { read: false })
      .pipe(clean({ force: true }));
});

gulp.task('watch', ['default'], function() {
  gulp.watch(paths.sass, ['css', 'copy-css']);
  gulp.watch(paths.img, ['img']);
  gulp.watch(paths.js, ['js', 'copy-js']);
  gulp.watch(paths.copy.html, ['copy-html']);
});
