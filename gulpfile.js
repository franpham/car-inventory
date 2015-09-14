
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/*.js")   // read all the js files
    .pipe(babel())              // input them to babel;
    .pipe(gulp.dest("dist"));   // output results to 'dist' subdirectory;
});