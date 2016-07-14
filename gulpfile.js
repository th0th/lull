var gulp = require('gulp');
var gulpif = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
    return gulp.src('index.src.html')
        .pipe(useref({

        }))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.html', rename('index.html')))
        .pipe(gulp.dest('.'));
});