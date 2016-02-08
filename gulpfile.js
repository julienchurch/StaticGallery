var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    rename = require('gulp-rename');

gulp.task('compile-StaticGallery', function() {
  gulp.src('src/Main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('static_gallery.css'))
      .pipe(gulp.dest('./example'));
});

gulp.task('compile-prettyAndUseless', function() {
  gulp.src('src/lib/prettyAndUseless.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('pretty_and_useless.css'))
      .pipe(gulp.dest('./example'));
})

gulp.task('default', function() {
  gulp.watch('src/**/*.scss', [ 'compile-StaticGallery'
                              , 'compile-prettyAndUseless' ]);
});
