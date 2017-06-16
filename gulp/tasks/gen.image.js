'use strict';

module.exports = function() {
	$.gulp.task('genimage', function () {
	  var spriteData = $.gulp.src('source/images/*.png').pipe($.gp.spritesmith({
	    imgName: 'images/sprite.png',
	    cssName: 'css/sprite.css'
	  }));
	  return spriteData.pipe($.gulp.dest('build/assets/'));
	});
}