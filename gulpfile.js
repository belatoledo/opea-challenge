const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));

gulp.task('sass', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', function () {
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
});
