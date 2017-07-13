let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('template/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./template/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('template/sass/**/*.scss',['styles']);
});