var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('uglify', function() {
	gulp.src('src.js')
		.pipe(uglify())
		.pipe(rename(function (path) {
			path.extname = ".min.js"
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('default', ['uglify']);
