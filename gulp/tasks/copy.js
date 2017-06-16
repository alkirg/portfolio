'use strict';

module.exports = function() {
    $.gulp.task('copy', function () {
        var source = ['source/images/**/*', 'source/fonts/**/*'];
        var destination = 'build/assets/';
        return $.gulp
            .src(source, { 'base' : './source/' })
            .pipe($.gulp.dest(destination));
    });
};