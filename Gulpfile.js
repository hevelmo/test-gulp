var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    concatJs = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');

gulp.task('css', function ()
{
  gulp.src('css/styles/*.css')
    .pipe(concatCss("concat.min.css"))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('css/styles/min'))
    .pipe(notify("Ha finalizado la task css!"));
});