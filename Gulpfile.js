var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    concatJs = require('gulp-concat'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify');

gulp.task('css', function ()
{
  gulp.src('css/styles/*.css')
    .pipe(concatCss("contact.min.css"))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('css/concat'))
    .pipe(notify("Ha finalizado la task css!"));
});