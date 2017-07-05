let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('template/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
          includePaths: ['node_modules/susy/sass', 'node_modules/compass-mixins/lib', 'node_modules/breakpoint-sass/stylesheets']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./template/css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('template/sass/**/*.scss',['styles']);
});