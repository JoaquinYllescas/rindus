var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('default', function() {
  // place code for your default task here
  console.log("Hello Kino");
});


//Compile sass
gulp.task('sass', function () {
  return gulp.src('./build/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'));

 });

gulp.task('watch', function(){
  gulp.watch('./build/scss/**/*.scss', ['sass']); 
  // Other watchers
});

gulp.task('default', ['sass']);
gulp.watch('watch', ['watch', 'sass']);