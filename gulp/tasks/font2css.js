'user strict';

$.gulp.task('font2css', function() {
    return $.gulp.src('source/fonts/**/*.{otf,ttf,woff,woff2}')
        .pipe(font2css())
        .pipe($.gulp.concat('build/assets/css/fonts.css'))
        .pipe($.gulp.dest('build/assets/fonts/'));
});