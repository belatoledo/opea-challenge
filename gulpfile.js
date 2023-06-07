const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('src/scss/custom.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/*/.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));