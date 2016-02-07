var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    rename = require('gulp-rename');

gulp.task('compile_scss', function() {
  gulp.src('src/Main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(rename('static_gallery.css'))
      .pipe(gulp.dest('./example'));
});

gulp.task('default', function() {
  gulp.watch('src/**/*.scss', ['compile_scss']);
});
